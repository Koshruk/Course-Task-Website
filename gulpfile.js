const gulp = require('gulp');

require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task('default', 
    gulp.series(
    'clean:dev',
     gulp.parallel('html:dev', 'sass:dev', 'css:dev', 'images:dev', 'json:dev','js:dev'),
     gulp.parallel('server:dev', 'watch:dev')));


gulp.task('docs', 
    gulp.series(
    'clean:docs',
    gulp.parallel('html:docs', 'sass:docs', 'css:docs', 'images:docs', 'json:docs','js:docs'),
    gulp.parallel('server:docs')))

