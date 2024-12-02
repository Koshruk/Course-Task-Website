const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const htmlclean = require('gulp-htmlclean');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const gulpautoprefixer = require('gulp-autoprefixer');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
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



const plumberNotify = (title) => {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error <%= error.message %>',
            sound: false,
        }),
    }
} 


gulp.task('clean:docs', function(){
    return gulp.src('./docs/', { read: false, allowEmpty: true })
    .pipe(clean());
})

gulp.task('html:docs', function(){
    return gulp
    .src('./src/*.html')
    .pipe(changed('./docs/'))
    .pipe(plumber(plumberNotify('HTML')))
    .pipe(fileInclude(fileIncludeSettings))
    .pipe(htmlclean())
    .pipe(gulp.dest('./docs/'))
});

gulp.task('sass:docs', function(){
    return gulp.src('./src/sass/*.scss')
    .pipe(changed('./docs/css/'))
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./docs/css/'))
});

gulp.task('css:docs', function(){
    return gulp
    .src('./src/css/**/*.css')
    .pipe(changed('./docs/css/'))
    .pipe(plumber(plumberNotify('SCSS')))
    .pipe(gulp.dest('./docs/css/'))
})

gulp.task('json:docs', function(){
    return gulp
    .src('./src/data/**/*.json')
    .pipe(changed('./docs/data/'))
    .pipe(plumber(plumberNotify('json')))
    .pipe(gulp.dest('./docs/data/'))
})

gulp.task('images:docs', function(){
    return gulp
    .src('./src/images/**/*', {encoding: false})
    .pipe(changed('./docs/images/'))
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('./docs/images/'))
});

gulp.task('js:docs', function(){
    return gulp
    .src('./src/js/*.js')
    .pipe(changed('./docs/js/'))
    .pipe(plumber(plumberNotify('JS')))
    .pipe(babel())
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(gulp.dest('./docs/js'))
})

