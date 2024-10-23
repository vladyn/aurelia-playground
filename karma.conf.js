var webpackConfig = require('./webpack.config.test.js');

module.exports = function(config) {
  config.set({
    
    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    files: [
      'test/unit/**/*.spec.js'
      //{pattern: 'karma.bundle.js', watched: false}
    ],
    exclude: [
    ],
    preprocessors: {
        'test/unit/**/*.spec.js': [ 'webpack' ]
    },
    // webpack: require('./webpack.config.test.js')({ tests: true }),

    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    plugins: [
        require ('karma-browserify'),
        require('karma-jasmine'),
        require('karma-webpack'),
        require('karma-chrome-launcher'),
        require('karma-spec-reporter'),
        require('karma-jasmine-html-reporter')
    ],
    
    reporters: ['spec','kjhtml'],
    port: 9876,
    colors: true,
    
    logLevel: config.LOG_DISABLE,
    autoWatch: true,
    browsers: ['Chrome'],
    client: {
       clearContext: false
    },
    
    singleRun: false,
    concurrency: Infinity,
  })
}
