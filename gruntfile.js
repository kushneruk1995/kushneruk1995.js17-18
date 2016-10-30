module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
        options: {
          separator: ';',
        },
        js: {
          src: ['script/**/*.js'],
          dest: 'dist_script/script.main.js',
        },
        css: {
          src: ['css/**/*.css'],
          dest: 'dist_css/style.main.css',
        }
      },

    cssmin: {
      target: {
        files: {
          'dist_css/style.main.min.css': ['dist_css/style.main.css']
        }
      }
    },


    uglify: {
      dist: {
        src: ['dist_script/script.main.js'],
        dest: 'dist_script/script.main.min.js',
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};