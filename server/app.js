require("dotenv").config();
require("./config/dbConnections");

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const session = require("express-session");
const argonautesRouter = require('./routes/argonautes');
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const app = express();
const cors = require("cors");

/**
 * Middlewares
 */
const corsOptions = { origin: process.env.FRONTEND_URL, credentials: true };

app.use(cors());

app.use(
    session({
      store: new MongoStore({ mongooseConnection: mongoose.connection }), 
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
    })
  );
  

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/argonaute', argonautesRouter);

module.exports = app;
