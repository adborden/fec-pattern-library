'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'FEC Pattern Library');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'documentation'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

fractal.components.engine('@frctl/nunjucks'); // register the Nunjucks adapter for your components
fractal.components.set('ext', '.html'); // look for files with a .njk file extension
fractal.components.set('default.preview', '@preview');
fractal.web.set('builder.dest', __dirname + '/_site');

// Theme
const mandelbrot = require('@frctl/mandelbrot');
const fecTheme = mandelbrot({
    skin: "white"
    // panels: ["html", "info", "resources"]
});

fractal.web.theme(fecTheme);
