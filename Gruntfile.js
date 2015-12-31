module.exports = function (grunt) {

   'use strict';
   // Project configuration.
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      //sass compiling 
      sass: {
         dist: {
            options: {
               sourcemap: 'none'
            },
            files: {
               'build/css/common.css': 'src/sass/common.scss'
            }

         }

      },
      
      //server to run 
      connect: {
         server: {
            options: {
               port: 9001,
               base: 'src/html/index.html'
            }
         }
      }
   });

   // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-connect');

   // Default task(s).
   grunt.registerTask('default', ['sass']);
   grunt.registerTask('watch', ['sass', 'connect']);

};