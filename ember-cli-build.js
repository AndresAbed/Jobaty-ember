/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    minifyJS: {
      enabled: false
    },
    minifyCSS: {
      enabled: false
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/css/animate.css');
  app.import('vendor/css/bootstrap.css');
  app.import('vendor/css/dark.css');
  app.import('vendor/css/faq.css');
  app.import('vendor/css/font-icons.css');
  app.import('vendor/css/fonts.css');
  app.import('vendor/css/pages-icons.css');
  app.import('vendor/css/pages.css');
  app.import('vendor/css/reset.css');
  app.import('vendor/css/responsive.css');
  app.import('vendor/css/style-empresas.css');
  app.import('vendor/css/style.css');
  app.import('vendor/css/style.min.css');

  return app.toTree();
};
