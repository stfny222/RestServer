var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
	res.send('<form method="POST" action="/postit">'+
		'<input name="user" type="text" />'+
		'<input name="pwd" type="password" />'+
		'<input type="submit" value="enviar" />'+
		'</form>');
});

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

app.post('/postit', function (req,res){
	var dependencies = ['Ingeniería de Sistemas', 
	'Psicología',
	'Ingeniería Industrial',
	'Centro Integral de Educación Continua'];
	res.json(dependencies);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
