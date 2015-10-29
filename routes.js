var index = require('./controllers/index'),
	dependencies = require('./controllers/dependencies'),
	people = require('./controllers/people'),
	events = require('./controllers/events');

module.exports = function (app, models) {
	//Akhá se declaran todas las rutas ;) ;)
	
	var indexController = index(models),
		dependenciesController = dependencies(models),
		peopleController = people(models),
		eventController = events(models);

	app.get('/', indexController.mainPage);

	//Deps
	app.get('/dependencyNames', dependenciesController.getDependencyNames);
	app.get('/dependencies', dependenciesController.getDependecies);
	app.get('/dependency', dependenciesController.getDependecy);
	//People
	app.get('/filter', peopleController.getFilters);
	app.get('/people', peopleController.getPeople);
	app.get('/peopleByFilter', peopleController.getPeopleByFilter);
	app.post('/addPerson', peopleController.addPerson);
	app.post('/updatePersonAssist', peopleController.updatePersonAssist);
	//Events
	app.get('/eventFields', eventController.getEventFields);
}