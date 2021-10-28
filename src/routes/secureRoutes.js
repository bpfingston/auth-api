'use strict';

const express = require('express');
const secureRouter = express.Router();
const bearerAuth = require('../middleware/bearer')
const dataModules = require('../models');
const acl = require('../middleware/acl')
const { handleGetAll, handleGetOne, handleCreate, handleUpdate, handleDelete } = require('./crudRoutes')

secureRouter.param('model', (req, res, next) => {
    const modelName = req.params.model;
    if (dataModules[modelName]) {
      req.model = dataModules[modelName];
      next();
    } else {
      next('Invalid Model');
    }
});

secureRouter.get('/:model', bearerAuth, handleGetAll);
secureRouter.get('/:model/:id', bearerAuth, handleGetOne);
secureRouter.post('/:model', bearerAuth, acl('create'), handleCreate);
secureRouter.patch('/:model/:id', bearerAuth, acl('update'), handleUpdate)
secureRouter.put('/:model/:id', bearerAuth, acl('update'), handleUpdate);
secureRouter.delete('/:model/:id', bearerAuth, acl('delete'), handleDelete);

module.exports = secureRouter;