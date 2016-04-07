var models = require('../models');

exports.view = function(req, res) {
    models.message.find(function(err, data) {
    	if (err)
    		console.log(err);
    	else
    		res.render('index', {data: data});
	});
}
