var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define('Event',{
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    filter: {
      type: Sequelize.STRING,
      allowNull: true
    },
    img: {
      type: Sequelize.STRING,
      allowNull: true
    },
    fields: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
  return Event;
};