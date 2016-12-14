// ΩΩΩ (1) se crea la función
var express = require ('express');

// (2) se asigna a var app la función express
var app = express();

//ingresar  motor de vistas
app.set('view engine', 'pug');

//definir  public
app.use(express.static('public'))

// (3) asignarle un ruta le pasamos parametros a app que es express
app.get('/', function (req, res) {
	res.render('index');
})

app.get('/signin', function (req, res) {
	res.render('index');
})

app.get('/signup', function (req, res) {
	res.render('index');
})

//lanzar nuestro servicio web si hay un error siempre pasarle la función precess con valor diferente a 0 es decir 1

app.listen(3000, function (err){
	if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('escuchando puesto 3000');
})

