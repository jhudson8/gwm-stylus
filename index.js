
//
//  Compile all .styl files to css
//
module.exports = function(options, Stylus) {
  Stylus = Stylus || require('gulp-stylus');
  options = options || {};

  return {
    css: {
      glob: ['**/*.styl'],
      beforeMerge: function(_options, pipeline) {
        return pipeline.pipe(Stylus(options));
      }
    }
  }
};
