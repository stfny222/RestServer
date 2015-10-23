var index = require('./controllers/index'),
	dependencies = require('./controllers/dependencies'),
	people = require('./controllers/people');

module.exports = function (app, models) {
	//Akhá se declaran todas las rutas ;) ;)
	
	var indexController = index(models),
		dependenciesController = dependencies(models),
		peopleController = people(models);

	app.get('/', indexController.mainPage);

	//Deps
	app.get('/dependencyNames', dependenciesController.getDependencyNames);
	app.get('/dependencies', dependenciesController.getDependecies);
	app.get('/dependency', dependenciesController.getDependecy);
	//People
	app.get('/filter', peopleController.getFilters);
	app.get('/people', peopleController.getPeople);
	app.get('/peopleByFilter', peopleController.getPeopleByFilter);
}