var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var models = require('./configModels')();
var routes = require('./routes')(app, models);


app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Definir los modelos



/*
Dependency.hasMany(Event, {as: 'Events'});
Event.hasMany(EventDate, {as: 'EventDates'});
EventDate.hasMany(Person, {as: 'Persons'});
Person.hasMany(Field, {as: 'Fields'});

//crear las tablas
//para borrar las tablas existentes y crearlas desde cero agregar {force: true}
sequelize.sync().then(function () {
  return Dependency.create({    
    name: 'estefany',
    color: '#777777'
  });

});*/







/*app.get('/', function (req, res) {
	res.send('<form method="POST" action="/dependencies">'+
		'<input name="user" type="text" />'+
		'<input name="pwd" type="password" />'+
		'<input type="submit" value="enviar" />'+
		'</form>');
});*/

/*app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);
});*/

/*app.get('/holi?id',function (req,res){
  res.send('user ' + req.query.id);
});*/

/*app.post('/postit', function (req,res){
	//console.log("req.body",req.body);
	//res.json(req.body.user);
	res.json({
		foo: "bar"
	});
});*/

/*app.post('/dependencies', function (req,res){	
	var dependencies = ['Ingeniería de Sistemas', 
	'Psicología',
	'Ingeniería Industrial',
	'Centro Integral de Educación Continua'];
	res.json(dependencies);
});*/

app.post('/events', function (req,res){
	var dependencies = '';
	res.json(dependencies);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});