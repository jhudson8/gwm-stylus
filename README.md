gulp-web-modules plugin used to scan for all .styl files and convert to plain css

Usage
-----
Place any stylus files within any section directories and they will be converted to css using [gulp-stylus](https://github.com/stevelacy/gulp-stylus) before the merge

Install
------
Add this plugin to the gulp-web-module reference in your gulpfile
```javascript
    var gulpWebModules = require('gulp-web-modules'),
        gwmStylus = require('gwm-stylus');

    gulpWebModules({
      plugins: [
        gwmStylus(options[, {gulp-stylus}])
      ]
    }).injectTasks(gulp);
```

Options
-------
The options are a pass through to the gulp-stylus module with the second parameter as the gulp-stylus instance to use one other than the default
