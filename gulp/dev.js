const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const { error } = require('console');
const { title } = require('process');
const { webcrypto } = require('crypto');

const fileIncludeSettings = {
    prefix: '@@',
    basepath: '@file',
}

const serverSettings = {
    livereload: true,
    open: true,
}


const plumberNotify = (title) => {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error <%= error.message %>',
            sound: false,
        }),
    }
} 


gulp.task('clean:dev', function(){
    return gulp.src('./build/', { read: false, allowEmpty: true })
    .pipe(clean());
})

gulp.task('html:dev', function(){
    return gulp
    .src('./src/*.html')
    .pipe(changed('./build/'))
    .pipe(plumber(plumberNotify('HTML')))
    .pipe(fileInclude(fileIncludeSettings))
    .pipe(gulp.dest('./build/'))
});

gulp.task('sass:dev', function(){
    return gulp.src('./src/sass/*.scss')
    .pipe(changed('./build/css/'))
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./build/css/'))
});

gulp.task('css:dev', function(){
    return gulp
    .src('./src/css/**/*.css')
    .pipe(changed('./build/css/'))
    .pipe(plumber(plumberNotify('SCSS')))
    .pipe(gulp.dest('./build/css/'))
})

gulp.task('json:dev', function(){
    return gulp
    .src('./src/data/**/*.json')
    .pipe(changed('./build/data/'))
    .pipe(plumber(plumberNotify('json')))
    .pipe(gulp.dest('./build/data/'))
})

gulp.task('images:dev', function(){
    return gulp
    .src('./src/images/**/*', {encoding: false})
    .pipe(changed('./build/images/'))
    .pipe(gulp.dest('./build/images/'))
});

gulp.task('js:dev', function(){
    return gulp
    .src('./src/js/*.js')
    .pipe(changed('./build/js/'))
    .pipe(plumber(plumberNotify('JS')))
    .pipe(webpack(require('./../webpack.config.js')))
    .pipe(gulp.dest('./build/js'))
})

gulp.task('server:dev', function(){
    return gulp
    .src('./build/')
    .pipe(server(serverSettings))
});

gulp.task('watch:dev', function(){
    gulp.watch('./src/sass/**/*.scss', gulp.parallel('sass:dev'));
    gulp.watch('./src/**/*.html', gulp.parallel('html:dev'));
    gulp.watch('./src/css/**/*.css', gulp.parallel('css:dev'));
    gulp.watch('./src/images/**/*', gulp.parallel('images:dev'));
    gulp.watch('./src/js/**/*.js', gulp.parallel('js:dev'));
    gulp.watch('./src/data/**/*.json', gulp.parallel('json:dev'));
})
