var _ = require('underscore');

module.exports = function (models) {

	var Dependency = models.Dependency,
		Event  = models.Event,
		EventDate = models.EventDate,
		Person = models.Person,
		Field = models.Field;

	var getEventFields = function (req, res) {
		//var id = req.body.id;
		var id = req.query.id;

		if (!id) {
			res.json({
				error: 'No hay id'
			});
			return;
		}

		Event
		.findAll({
  			attributes: ['fields'],
  			where: {
				id: id
  			}
  		})
		.then(function (fields, err) {
			if (err) {
				res.status(500);
				res.send("Error :(");
				return;
			}

			var rpta;
			if (Array.isArray(fields)) {
				rpta = fields[0]
			}else{
				rpta = fields;
			}

			if(rpta.fields === null){
				res.send("No hay campos (:");
				res.send(null);
				return;
			}

			res.writeHead(200, {"Content-Type": "application/json"});

			res.write(rpta.fields);
			res.end();
		});
	}

	return {
		getEventFields : getEventFields
	}
}