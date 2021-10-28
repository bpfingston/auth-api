'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./users');
const clothesModel = require('./clothes');
const foodModel = require('./food');
const Collection = require('./data-collection.js');


const DATABASE_URL = 'sqlite::memory:'|| process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  users: userModel(sequelize, DataTypes),
};