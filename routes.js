var index = require('./controllers/index'),
	dependencies = require('./controllers/dependencies');

module.exports = function (app, models) {
	//Akhá se declaran todas las rutas ;) ;)
	
	var indexController = index(models),
		dependenciesController = dependencies(models);

	app.get('/', indexController.mainPage);

	//Deps
	app.get('/dependencyNames', dependenciesController.getDependencyNames);
	app.get('/dependencies', dependenciesController.getDependecies);
	app.get('/dependency', dependenciesController.getDependecy);
}