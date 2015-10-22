var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var Field = sequelize.define('Field',{
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
  return Field;
}