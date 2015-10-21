var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  var Dependency = sequelize.define('Dependency', { 
    dependency_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    color: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

  return Dependency;
};