## CTP Cohort 7 Welcome Hackathon 2021 Submission

This project was submitted to [CTP Cohort 7 Welcome Hackathon 2021](https://devpost.com/software/venture-4pmz9x). 

Categories won: Best Overall, Best Backend, Best SWE Practices. 

## Inspiration

As places begin to open up, there are more opportunities for us to leave virtual events behind, and once more begin doing the things we love. Venture is designed to help people return to normal by searching for in-person events in their area.

## How to run

The application requires .env keys MONGODB, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, KEY, YELP_KEY in the `server` directory

A MongoDB URI can be accessed via [MongoDB Atlas](https://www.mongodb.com/).
Google Client ID, Google Client Secret, and redirect uris are set up on [Google Cloud Platform](https://console.cloud.google.com/apis/dashboard).
KEY can set to anything.
YELP_KEY can be be acquired from [Yelp Fusion](https://www.yelp.com/developers/documentation/v3/event).

Run `npm i` then `npm start` in both `client` and `server` directories

## What it does

Venture allows users to search for nearby concerts, festivals, performing arts, and much more. After a user chooses what type of event they want to attend, they're presented with events that relate to the category. After selection, Venture also saves each user's events to their dashboard, where they can see what events are upcoming and trending.

## Demo

[Youtube Demo](https://youtu.be/W6bsu0xSuIQ)

![Login](https://media.giphy.com/media/pWJtnoGgwJ2dkKLjWO/giphy.gif)

![Categories](https://media.giphy.com/media/zmlaFEm6T3HJ6PdiSg/giphy.gif)

![Choose Events](https://media.giphy.com/media/ER39yHkskav2tQyeHu/giphy.gif)

![Dashboard](https://media.giphy.com/media/hhsoJoJlHnAkUT9lSu/giphy.gif)

## How we built it

The front-end was built by Edward and Harjit using the **React** JavaScript framework, **Styled-Components**, and **Chakra-UI**.

The back-end was built by Abedin and Brendan with **Node.js**, **Passport** for **Google OAuth**, and **MongoDB Atlas**.

## Challenges

**Front-end** - Creating a general layout was challenging because the user's experience is one of the most important things to consider when making a web application. One of the challenges we faced was creating a sidebar for user navigation. It took a while for us to make it both aestheically pleasing and functional within the application.

**Back-end** -  When we thought of Venture, we did not know which API to use for searching events. It was difficult to find event-related APIs that gave good responses, since we needed descriptions, images, times, and locations of each event. We ended up using Yelp's Event API because it gave the responses we were looking for. In the future we'd like to try Google's API for finding local attractions to make custom events for.

## Accomplishments that we're proud of

We're proud that we were able to put our design into code and having the intended functionality within the time frame. Everyone on the team contributed and communicated well with each other to make sure the programming went smoothly and all issues were resolved quickly.

## What we learned
In creating Venture, we learned about communication between roles and team members. The application required a lot of back-and-forth between front-end and back-end developers because we needed to retrieve, display, and post data.  

There were many components in Venture that relied on getting data from the server or other components. Venture also taught us how to work as a team because there were many times we had to come together to fix bugs and figure out how the application should work in specific scenarios.  

## What's next for Venture?
* Create a friends list 
* Allow users to create their own events, which they can send invitations to their friends
* Functional/dynamic trending and feed on dashboard
