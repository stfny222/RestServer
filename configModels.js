var path      = require("path");
var Sequelize = require('sequelize');
var models = {};

module.exports = function () {
	var sequelize = new Sequelize('testasistencia', 'root', 'Apl1c4t10n.ITL4B.', {
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
	models['Event'].belongsTo(models['Dependency'], {foreignKey: 'DependencyId', constraints: true});
	models['Event'].hasMany(models['EventDate'], {constraints: true});
	models['EventDate'].belongsTo(models['Event'], {foreignKey: 'EventId',constraints: true});
	models['EventDate'].hasMany(models['Person'], {constraints: true});
	models['Person'].belongsTo(models['EventDate'], {foreignKey: 'EventDateId',constraints: true});
	models['Person'].hasMany(models['Field'], {constraints: true});
	models['Field'].belongsTo(models['Person'], {foreignKey: 'PersonId',constraints: true});

	sequelize.sync(/*{force: true}*/)/*.then(function () {
		return models['Dependency'].create(
				{
					name : "Dependencia 1"
				}
			).then(function (dep) {
				return models['Event'].create({    
		    		name: 'Eventito',
		    		img: 'http://cdnstatic.visualizeus.com/thumbs/1f/ba/art-1fbacc6e726490136110b4d7f0ac31e0_h.jpg',
		    		DependencyId: dep.id
		  		}).then(function (ev) {
		  			return models['EventDate'].create({
		  				date: new Date(),
		  				duration: 120,
		  				location: 'Aquí',
		  				EventId: ev.id
		  			}).then(function (evdate) {
		  				return models['Person'].create({
		  					firstName: 'Estefany',
		  					lastName: 'Valdivieso',
		  					filterValue: 'Ingenieria de Sistemas',
		  					EventDateId: evdate.id
		  				})
		  			})
		  		});
			console.log("dep created", dep);
		});
	})*/;

	/*sequelize.sync().then(function () {
		return models['Dependency'].create(
				{
					name : "Dependencia 2"
				}
			).then(function (dep) {
				return models['Event'].create({    
		    		name: 'Eventote',
		    		DependencyId: dep.id
		  		}).then(function (ev) {
		  			return models['EventDate'].create({
		  				date: new Date(),
		  				duration: 210,
		  				location: 'Por ahí',
		  				EventId: ev.id
		  			}).then(function (evdate) {
		  				return models['Person'].create({
		  					firstName: 'Giwiro',
		  					lastName: 'Davalos',
		  					EventDateId: evdate.id
		  				})
		  			})
		  		});
			console.log("dep created", dep);
		});
	});*/

	return models;
}
