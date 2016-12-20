// exportar librerias
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify')


// α*β*Ω tareas
gulp.task('styles', function(){
	gulp
		.src('index.scss') //∆Ωglobs expresiones regulares para acceder a estos archivos//
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('public'));
})
// α*β*Ω tareas 2
gulp.task('assets', function(){
  gulp
	.src('assets/*')  //globs expresiones regulares para acceder a estos archivos//
	.pipe(gulp.dest('public'));
})

function compile(watch){
	var bundle = watchify(browserify('./src/index.js'));

	function rebundle(){
       bundle
       .transform(babel) // transformar
		.bundle() 
		.pipe(source('index.js'))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('public'))
	}
	if (watch) {
      bundle.on('update', function(){
      	console.log('--> Bundling...');
      	rebundle();
      })
	}
	rebundle();
}


// α*β*Ω tarea de builds
gulp.task('builds', function(){
 return compile();
})
// tarea de watch
gulp.task('watch', function(){
	return compile(true);

})


// α*β*Ω tareas por default
gulp.task('default', ['styles', 'assets', 'builds'])