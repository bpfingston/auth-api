'use strict';

require('dotenv').config();
const app = require('./src/server.js');
const { db } = require('./src/models');
const PORT = process.env.PORT || 3002

db.sync().then(() => {
  app.start(PORT);
});
