module.exports = function (models) {

	var mainPage = function (req, res) {
		res.send('<form method="POST" action="/dependencies">'+
			'<input name="user" type="text" />'+
			'<input name="pwd" type="password" />'+
			'<input type="submit" value="enviar" />'+
			'</form>');
	}

	return {
		mainPage: mainPage
	}
}

	