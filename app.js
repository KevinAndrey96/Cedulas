var express = require('express');
const { Person } = require('./models')
var app = express();
app.use(express.json());
app.post('/', function (req, res) {
	
	var messa="";
	req.body.forEach(peticion => { 
    	Person.create({ document: peticion.cedula, firstName: peticion.name, lastName: peticion.lastName,  score: parseFloat(peticion.score.replace(',', '.')), municipality: peticion.municipality});
    }); 
    res.json({ 
	     status: "200", message: "Ok" 
	  });
});
var env = process.argv[2] || 'dev';
switch (env) {
	case 'dev':
	app.listen(3000, ()=>{
		console.log("Running");
	});
	break;
	case 'prod':
	app.listen();
	break;
}