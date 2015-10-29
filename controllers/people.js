var _ = require('underscore'),
	sequelize = require('sequelize');

module.exports = function (models) {

	var Dependency = models.Dependency,
		Event  = models.Event,
		EventDate = models.EventDate,
		Person = models.Person,
		Field = models.Field;

	var getFilters = function(req, res){
		var id = req.query.id;
		if (!id) {
			res.json({
				error: 'No hay id'
			});
			return;
		}

		Person.findAll({
			distinct: 'filterValue', 
			where: {
				EventDateId: id
			}
		})
		.then(function (people, err) {
			if (err) {
				res.status(500);
				res.send("Error :(");
			}				
		    res.json(_.map(people, function (obj) {
		    	return obj.filterValue;
		    }));	
	    });
	}

	var getPeople = function(req, res){
		var id = req.query.id;

		if (!id) {
			res.json({
				error: 'No hay id'
			});
		}

		Person
		.findAll({
  			where: {
				EventDateId: id
  			}
  		})
		.then(function (people, err) {
			if (err) {
				res.status(500);
				res.send("Error :(");
			}
		    res.json(people);
		});
	}

	var getPeopleByFilter = function(req, res){
		var id = req.query.id;
		var filter = req.query.filter;
		if (!id) {
			res.json({
				error: 'No hay id'
			});			
		}


		Person
		.findAll({
  			where: {
				EventDateId: id,
				filterValue: filter
  			}
  		})
		.then(function (people, err) {
			if (err) {
				res.status(500);
				res.send("Error :(");
			}
		    res.json(people);
		});
	}

	var addPerson = function(req, res){
		console.log("PAPI!!!!!!!!!!!!!!!!!!!!!");
		
		console.log(req);
		console.log(req.body);
		console.log(req.params);
		console.log(req.query);

		/*
		Person.create({}).then(function(person) {

		})*/

		res.json({
			status: "yes"
		});
	};

	var updatePersonAssist = function(req, res){
		
	};

	return {
		getFilters : getFilters,
		getPeople : getPeople,
		getPeopleByFilter : getPeopleByFilter,
		addPerson : addPerson,
		updatePersonAssist : updatePersonAssist
	}
}