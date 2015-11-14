module.exports = function (models) {

	var mainPage = function (req, res) {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write('<form method="POST" action="/addPerson">'+
			'<input name="user" type="text" />'+
			'<input name="pwd" type="password" />'+
			'<input type="submit" value="enviar" />'+
			'</form>');
		res.end();
	}

	return {
		mainPage: mainPage
	}
}

	