module.exports = function (grunt) {

   'use strict';
   // Project configuration.
   grunt.initConfig({
      //set paths
      path: {
         css: {
            src: 'src/sass/common.scss',
            dist: 'build/css/common.css',
            all: 'src/sass/**/*.scss'
         },
         html: {
            //will need to change the path of this if new page is needed
            src: 'src/html/index.html',
            dist: 'build/html/',
            all: 'src/html/**/*.html'
         },
         img: {
            src: 'src/images/**/*',
            dist: 'build/images'
         },
         js: {
            src: 'src/js/*.js',
            dist: 'build/js/',
            all: 'src/js/**/*.js'
         }
      },
      pkg: grunt.file.readJSON('package.json'),
      //sass compiling 
      sass: {
         dist: {
            options: {
               sourcemap: 'none',
               noCache: true
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
               port: 8000,
               base: {
                  path: 'build'
               }
            }
         }
      },

      //this is for the build process
      copy: {
         html: {
            files: [
          // includes files within path
               {
                  expand: true,
                  src: ['<%= path.html.src %>'],
                  dest: '<%= path.html.dist %>',
                  filter: 'isFile',
                  flatten: true
               },
        ],
         },
         img: {
            files: [
          // includes files within path
               {
                  expand: true,
                  src: ['<%= path.img.src %>'],
                  dest: '<%= path.img.dist %>',
                  flatten: true
               },
        ],
         },
         js: {
            files: [
          // includes files within path
               {
                  expand: true,
                  src: ['<%= path.js.src %>'],
                  dest: '<%= path.js.dist %>',
                  flatten: true
               },
        ],
         }
      },

      //watch sass files
      watch: {
         styles: {
            files: ['<%= path.css.all %>'],
            tasks: ['sass'],
            options: {
               spawn: false,
            },
         },
         html: {
            files: ['<%= path.html.all %>'],
            tasks: ['copy:html'],
            options: {
               spawn: false,
            },
         },
         js:{
            files:['<%= path.js.all %>'],
            tasks:['copy:js'],
            options: {
               spawn: false,
            },
         },
      }
   });

   // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-connect');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-copy');

   // Default task(s).
   grunt.registerTask('default', ['sass']);
   grunt.registerTask('dev', ['sass', 'copy', 'watch']);
   grunt.registerTask('build', ['copy', 'sass', 'watch'])

};