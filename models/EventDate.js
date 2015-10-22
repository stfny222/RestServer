var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
var EventDate = sequelize.define('EventDate',{
	  id: {
	    type: Sequelize.UUID,
	    defaultValue: Sequelize.UUIDV1,
	    primaryKey: true
	  },
	  date: {
	    type: Sequelize.DATE,
	    allowNull: false
	  },
	  duration: {
	    type: Sequelize.INTEGER,
	    allowNull: true
	  },
	  location: {
	    type: Sequelize.STRING,
	    allowNull: true
	  }
	});
  return EventDate;
};