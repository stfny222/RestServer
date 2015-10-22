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
		    		dependency_id: obj.dependency_id,
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
		            include: [
			            {
			            	model: EventDate,
			            	include: [
			            		{
					            	model: Person,
					            	include: [Field]
					        	}
			            	]
			        	}
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

		var id = req.body.dependency_id;

		Dependency.findById(id).then(function (dep, err) {
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