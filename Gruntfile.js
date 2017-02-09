/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    imagemin: {
      dynamic: { 
       options: {                       // Target options
          optimizationLevel: 7,
          progressive: true,
        },   // options close                     // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'test/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dest/'                  // Destination path prefix
        }] // files close
      }, // dynamic close
    }, // imagemin close
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task.
  grunt.registerTask('default', ['imagemin']);

};
