var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  var Person = sequelize.define('Person',{
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    filterValue: {
      type: Sequelize.STRING,
      allowNull: true
    },
    assist: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });
  return Person;
}