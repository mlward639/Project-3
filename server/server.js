const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const models = require('./models')
// NOTE: perhaps need for later?
// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// CB: NEED TO ACCESS MONGODB?
// const monogojs = require("monogojs");
// ADD IF NEEDED: const helpers = require('./utils/helpers');
const PORT = process.env.PORT || 3000;
const app = express();
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};
app.use(session(sess));
//  SET UP MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // are we using a public folder or client folder??
//move to config
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/codingKai_db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// routes
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
}
//====================================================================================================
// DELETE LATER
//----------------------------------------------------
// IS any of this needed with mongoose (rather than mysql)
// const sequelize = require("./config/connection");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const sess = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   logging: false,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));
//-------------------------------------------------------

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
//app.use(express.static(path.join(__dirname, 'public'))); // are we using a public folder or client folder?? update accordingly. for now, just connecting to test index.html

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });
//======================================================================================================
