/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
	        name: '',
	        width: 533,
	        quality: 50 }]       
	      // ,{
	      //   name: 'medium',
	      //   width: 640,
	      //   quality: 30
	      // },{
	      //   name: "large",
	      //   width: 1024,
	      //   suffix: "_x1",
	      //   quality: 60
	      // },{
	      //   name: "large",
	      //   width: 1440,
	      //   separator: "-",
	      //   suffix: "_x2",
	      //   quality: 60
	      // }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },

    /*jshint check*/
    jshint: {
        options: {
            "curly": true,
            "eqeqeq": true,
            "nocomma": true,
            "undef": false,
            "unused": true,
            "globals": {
              "jQuery": true
            },
        },
        files: ['js/main.js'],
    },
    /* csshint*/
    csslint: {
        options: {
            csshintrc: '.csshintrc',
            },
        files: ['css/main.css', 'css/responsive-nav.css'],
    },

    /* Watch the files changed and then run some tasks*/
    watch: {
      scripts: {
          files: ['css/main.css', 'js/main.js','index.html'],
          tasks: ['jshint'],
          options: {
              spawn: false,
              livereload: true,
          },
      },
    },

    /* Connect to a server*/
    connect: {
      server: {
        options: {
          port: 8080,
          hostname: 'localhost',
          base:['./'],
          // keepalive: true,
          livereload: true,
        },
      },
    },

  
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  // grunt.registerTask('default', ['jshint', 'csslint', 'watch']);
  grunt.registerTask('default', ['jshint', 'connect', 'watch']);

};
