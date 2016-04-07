var models = require('../models');

exports.send = function(req, res) {
    
    console.log(req.body); // help you see what is inside of req.body
    
    // your solution here
    var message = new models.message({
    	"email": req.body.email,
    	"content": req.body.content,
    	"created": Date.now()
    });

    message.save(function(err, data) {
    	if (err)
    		console.log(err);
    });

   	res.redirect('/');
};