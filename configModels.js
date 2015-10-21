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

	//models['Dependency'].hasMany(models['Event'], {as: 'Events'});
	models['Event'].belongsTo(models['Dependency'], {foreignKey: 'dependency_id'});
	//models['Event'].hasMany(models['EventDate'], {as: 'EventDates'});
	models['EventDate'].belongsTo(models['Event'], {foreignKey: 'event_id'});
	//models['EventDate'].hasMany(models['Person'], {as: 'People'});
	models['Person'].belongsTo(models['EventDate'], {foreignKey: 'eventdate_id'});
	//models['Person'].hasMany(models['Field'], {as: 'Fields'});
	models['Field'].belongsTo(models['Person'], {foreignKey: 'person_id'});

	sequelize.sync(/*{force: true}*/).then(function () {
		/*return models['Dependency'].create(
				{
					name : "Dependencia 1"
				}
			).then(function (dep) {
				return models['Event'].create({    
		    		name: 'Eventito',
		    		dependency_id: dep.dependency_id
		  		}).then(function (ev) {
		  			return models['EventDate'].create({
		  				date: new Date(),
		  				duration: 120,
		  				location: 'Aquí',
		  				event_id: ev.event_id
		  			}).then(function (evdate) {
		  				return models['Person'].create({
		  					firstName: 'Estefany',
		  					lastName: 'Valdivieso'
		  				})
		  			})
		  		});*/
			/*console.log("dep created", dep);*/
		//});
	});

	return models;
}
