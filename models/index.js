'use strict';

const Sequelize = require('sequelize');
const config = require('../config/config.json');

// Sequelize('database 이름', 'username', 'password', 'details{}')
const sequelize = new Sequelize('####', 'root', '####', {
  host: '127.0.0.1',
  dialect: 'mysql',
  // port 번호
  port: '####',
});

// model export 하기
const Menus = require('./menu.js')(sequelize, Sequelize.DataTypes);
const Restaurants = require('./restaurant.js')(sequelize, Sequelize.DataTypes);

const db = {};

db.Menus = Menus;
db.Restaurants = Restaurants;

db.sequelize = sequelize;

module.exports = db;