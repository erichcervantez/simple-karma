//see http://gruntjs.com/sample-gruntfile
module.exports = function (grunt) {

    //initialize our configuration object
    grunt.initConfig({

        //read package.json.  allows us to use any properties defined within
        pkg: grunt.file.readJSON('package.json'),

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }

        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'src/*.js', 'tests/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        }
    });

    //load any grunt plugins
    grunt.loadNpmTasks('grunt-karma');

    // this would be run by typing "grunt test" on the command line
    grunt.registerTask('test', ['jshint', 'qunit']);

    //setup some tasks for Grunt to do, especiall the "default" task
    grunt.registerTask('default', ['karma']);


};
