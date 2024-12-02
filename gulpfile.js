const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps');
const { error } = require('console');
const { title } = require('process');

const fileIncludeSettings = {
    prefix: '@@',
    basepath: '@file',
}

const serverSettings = {
    livereload: true,
    open: true,
}


gulp.task('clean', function(){
    return gulp.src('./dist/', { read: false, allowEmpty: true })
    .pipe(clean());
})

gulp.task('html', function(){
    return gulp
    .src('./src/*.html')
    .pipe(fileInclude(fileIncludeSettings))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('css', function(){
    return gulp
    .src('./src/css/**/*.css')
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('images', function(){
    return gulp
    .src('./src/images/**/*')
    .pipe(gulp.dest('./dist/images/'))
});

gulp.task('server', function(){
    return gulp
    .src('./dist/')
    .pipe(server(serverSettings))
});

gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch('./src/**/*.html', gulp.parallel('html'));
    gulp.watch('./src/css/**/*.css', gulp.parallel('css'));
    gulp.watch('./src/images/**/*', gulp.parallel('images'));
})

gulp.task('default', 
    gulp.series(
    'clean',
     gulp.parallel('html', 'sass', 'css', 'images'),
     gulp.parallel('server', 'watch')))
