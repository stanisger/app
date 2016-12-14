// exportar librerias
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watch = require('watchify')


// α β Ω tareas
gulp.task('styles', function(){
	gulp
		.src('index.scss') //∆Ωglobs expresiones regulares para acceder a estos archivos//
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('public'));
})
// α β Ω tareas 2
gulp.task('assets', function(){
  gulp
	.src('assets/*')  //globs expresiones regulares para acceder a estos archivos//
	.pipe(gulp.dest('public'));
})


// α β Ω tarea 3 javascript
gulp.task('scripts' , function(){
  browserify('./src/index.js')
	.transform(babel) // transformar
	.bundle() 
	.pipe(source('index.js'))
	.pipe(rename('app.js'))
	.pipe(gulp.dest('public'))
})

// α β Ω tarea de builds
gulp.task('builds', function(){

})
// tarea de watch
gulp.task('watch', function(){

})


// α β Ω tareas por default
gulp.task('default', ['styles', 'assets', 'builds'])