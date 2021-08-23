const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieSession = require('cookie-session');
const User = require('./models/User');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.KEY],
  }),
);

app.use(
  session({
    secret: process.env.KEY,
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
},
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleID: profile.id }).then((currentUser) => {
      if (currentUser) {
        done(null, currentUser);
      } else {
        console.log(profile);
        new User({
          googleID: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
        }).save().then((newUser) => {
          done(null, newUser);
        }).catch((err) => console.log(err));
      }
    });
  }));

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }));

app.get('/auth/google/callback',
  passport.authenticate('google'),
  (request, response) => {
    response.redirect('http://localhost:3000'); // redirect after login
  });

app.get('/getUser', (request, response) => {
  response.send(request.user);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
