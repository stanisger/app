var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');


//tareas
gulp.task('styles', function(){
	gulp
		.src('index.scss') //∆Ωglobs expresiones regulares para acceder a estos archivos//
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('public'));
})

//tareas 2
gulp.task('assets', function(){
  gulp
	.src('assets/*')  //∆Ωglobs expresiones regulares para acceder a estos archivos//
	.pipe(gulp.dest('public'));
})

//tareas por default
gulp.task('default', ['styles', 'assets'])