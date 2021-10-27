'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./users');
const clothesModel = require('./clothes');
const foodModel = require('./food');
// strech goal
// const Collection = require('./data-collection.js');


const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);
// const food = foodModel(sequelize, DataTypes);
// const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: foodModel(sequelize, DataTypes),
  clothes: clothesModel(sequelize, DataTypes),
  users: userModel(sequelize, DataTypes),
};