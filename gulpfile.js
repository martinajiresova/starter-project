const gulp      = require('gulp');
const sass      = require('gulp-sass');
const cssnano   = require( 'cssnano' );
const postcss   = require('gulp-postcss');

function scss() {
    return gulp.src('./styles/global.scss')
        .pipe( sass() )
        .pipe( postcss( [ cssnano() ] ) )
        .pipe( gulp.dest( './styles/' ) )
};

//Default task
exports.default = gulp.series( scss, function( done ) {
    gulp.watch( [ './styles/**/*.scss' ], gulp.series( scss ) );
} );

//npm i gulp gulp-sass cssnano gulp-postcss
