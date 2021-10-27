'use strict';


const cors = require('cors');
const express = require('express');
const app = express();
const morgan = require('morgan');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const crudRoutes = require('./routes/crudRoutes.js');
const userRoutes = require('./routes/userRoutes.js');




app.use(cors());
app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(userRoutes);
app.use('/api/v1', crudRoutes);
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
