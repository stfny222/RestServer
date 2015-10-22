var path      = require("path");
var Sequelize = require('sequelize');
var models = {};

module.exports = function () {
	var sequelize = new Sequelize('testasistencia', 'root', 'root', {
			host: 'localhost',
			dialect: 'mysql',
			pool: {
			max: 5,
			min: 0,
			idle: 10000
		},
	});

	models['Dependency'] = sequelize.import(path.join(__dirname, "/models/Dependency"));
	models['Event'] = sequelize.import(path.join(__dirname, "/models/Event"));
	models['EventDate'] = sequelize.import(path.join(__dirname, "/models/EventDate"));
	models['Person'] = sequelize.import(path.join(__dirname, "/models/Person"));
	models['Field'] = sequelize.import(path.join(__dirname, "/models/Field"));

	models['Dependency'].hasMany(models['Event'], {constraints: true});
	models['Event'].belongsTo(models['Dependency'], {foreignKey: 'DependencyDependencyId', constraints: true});
	models['Event'].hasMany(models['EventDate'], {constraints: true});
	models['EventDate'].belongsTo(models['Event'], {foreignKey: 'EventEventId',constraints: true});
	models['EventDate'].hasMany(models['Person'], {constraints: true});
	models['Person'].belongsTo(models['EventDate'], {foreignKey: 'EventDateEventdateId',constraints: true});
	models['Person'].hasMany(models['Field'], {constraints: true});
	models['Field'].belongsTo(models['Person'], {foreignKey: 'PersonPersonId',constraints: true});

	sequelize.sync({force: true}).then(function () {
		return models['Dependency'].create(
				{
					name : "Dependencia 1"
				}
			).then(function (dep) {
				return models['Event'].create({    
		    		name: 'Eventito',
		    		DependencyDependencyId: dep.dependency_id
		  		}).then(function (ev) {
		  			return models['EventDate'].create({
		  				date: new Date(),
		  				duration: 120,
		  				location: 'Aquí',
		  				EventEventId: ev.event_id
		  			}).then(function (evdate) {
		  				return models['Person'].create({
		  					firstName: 'Estefany',
		  					lastName: 'Valdivieso',
		  					EventDateEventdateId: evdate.eventdate_id
		  				})
		  			})
		  		});
			console.log("dep created", dep);
		});
	});

	return models;
}
