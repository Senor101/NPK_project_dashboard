const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Sample = sequelize.define('Sample', {
  id: {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  }
  LED_BLUE : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
    LED_RED : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
    LED_GREEN : {
    type : DataTypes.INTEGER,
    allowNull : false
  }
})

module.exports = Sample;