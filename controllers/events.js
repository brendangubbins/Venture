const eventsRouter = require('express').Router();
const Event = require('../models/Event');
const User = require('../models/User');

// Route displays all events as well as attendees (only firstName and email)
eventsRouter.get('/', async (request, response) => {
  const events = await Event
    .find({}).populate('users', { firstName: 1, email: 1 });

  response.json(events.map(event => event.toJSON()));
});

/* Route will do one of three:
1. if the event and user are already in the DB, do nothing
2. if the event is in the DB but the user isn't, add user to Event, add event to User
3. if the event is not in the DB, create event and add user to it, and add event to user
*/
eventsRouter.post('/', async (request, response) => {

  const { body } = request;

  const event = await Event.findOne({ business_id: body.business_id });
  const user = await User.findById(body.id);

  if (event && event.users.includes(body.id)) {
    // both the event and user exist
    response.json(event.toJSON());
  } else if (event) {
    // event exists, but user doesnt
    event.users.push(body.id);
    await event.save();

    user.upcomingEvents.push(event);
    await user.save();

    response.json(event.toJSON());
  } else {
    // event doesn't exist
    const eventObj = new Event({
      name: body.name,
      description: body.description,
      image: body.image,
      location: body.location,
      time_start: body.time_start,
      category: body.category,
      is_free: body.is_free,
      business_id: body.business_id,
      users: [body.id],
    });

    const savedEvent = await eventObj.save();

    user.upcomingEvents.push(savedEvent);
    await user.save();

    response.json(savedEvent.toJSON());
  }
});

// Route will get a specific event document by ID
eventsRouter.get('/:id', async (request, response) => {
  const event = await Event.findById(request.params.id)
  if (event) {
    response.json(event.toJSON());
  } else {
    response.sendStatus(404);
  }
});

// Route will delete a specific event document by ID
eventsRouter.delete('/:id', async (request, response) => {
  await Event.findByIdAndRemove(request.params.id)
  response.sendStatus(204);
});

module.exports = eventsRouter;
