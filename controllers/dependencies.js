var _ = require('underscore');

module.exports = function (models) {

	var Dependency = models.Dependency,
		Event  = models.Event,
		EventDate = models.EventDate,
		Person = models.Person,
		Field = models.Field;

	var getDependencyNames = function (req, res) {
		Dependency.findAll().then(function (deps, err) {
			if (err) {
				res.status(500);
				res.send("Error :(");
			}
		    res.json(_.map(deps, function (obj) {
		    	return {
		    		id: obj.id,
		    		name: obj.name
		    	}
		    }));
		});
	}

	var getDependecies = function (req, res) {
		Dependency.findAll({
			include: [
		        {
		            model: Event,
		            include: [EventDate
			            /*{
			            	model: EventDate,
			            	include: [
			            		{
					            	model: Person,
					            	include: [Field]
					        	}
			            	]
			        	}*/
		            ]
		        }
		    ]
		}).then(function (deps, err) {
			if (err) {
				res.status(500);
				res.send("Error :(");
			}
		    res.json(deps);
		});
	}

	var getDependecy = function (req, res) {

		//var id = req.body.id;
		var id = req.query.id;

		if (!id) {
			res.json({
				error: 'No hay id'
			});
		}

		Dependency
		.findAll({
  			where: {
				id: id
  			},
  			include: [
		        {
		            model: Event,
		            include: [EventDate]
		        }
		    ]
  		})
		.then(function (dep, err) {
			if (err) {
				res.status(500);
				res.send("Error :(");
			}
		    res.json(dep);
		});
	}

	return {
		getDependencyNames : getDependencyNames,
		getDependecies : getDependecies,
		getDependecy : getDependecy
	}
}