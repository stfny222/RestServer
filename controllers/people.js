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
				return;
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
			return;
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
				return;
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
			return;	
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
		console.log(req.headers);
		console.log("PAPI!!!!!!!!!!!!!!!!!!!!!");

		console.log(req.body);

		var eventId = req.body.eventId;
		var person = req.body.person;

		console.log(eventId);
		console.log(person);

		Person.create({
			firstName: person.firstName,
			lastName: person.lastName,
			filterValue: person.filterValue			
		}).then(function (p) {
			person.fields.forEach(function(field) {
			    Field.create({
			    	title: field.title,
			    	type: field.type,
			    	content: field.content
				})
			});			
		})

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