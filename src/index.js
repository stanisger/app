// libreria page
var page = require ('page');
var yo = require ('yo-yo');
var empty = require('empty-element')

var main = document.getElementById('platzigram');
console.log(main)

page( '/', function(ctx, next){
	main.innerHTML = 'Home <a href="/signup"> Signup</a>';
})


page( '/signup', function(ctx, next){
	main.innerHTML = 'Signup<a href="/"> Home</a>';
})

// lamar a la funcion
page()