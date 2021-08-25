// WIP
const eventsRouter = require('express').Router();
const Event = require('../models/Event');
const User = require('../models/User');

eventsRouter.get('/', async (request, response) => {
  // display events + all attendees
  const events = await Event
    .find({}).populate('users', { firstName: 1, email: 1 });

  response.json(events.map(event => event.toJSON()));
});

eventsRouter.post('/', async (request, response) => {

  const { body } = request;

  const event = await Event.findOne({ business_id: body.business_id });
  const user = await User.findById(body.id);

  // body.id === user's id
  if (event && event.users.includes(body.id)) {
    // event and user exist
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

eventsRouter.get('/:id', async (request, response) => {
  const event = await Event.findById(request.params.id)
  if (event) {
    response.json(event.toJSON());
  } else {
    response.sendStatus(404);
  }
});

eventsRouter.delete('/:id', async (request, response) => {
  await Event.findByIdAndRemove(request.params.id)
  response.sendStatus(204);
});

module.exports = eventsRouter;
