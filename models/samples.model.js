const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('minor_project','root','',{
      host:'localhost',
      dialect : 'mysql'
});

const Sample = sequelize.define('Sample', {
  id: {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  },
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

Sample.sync();

module.exports = {Sample,sequelize};