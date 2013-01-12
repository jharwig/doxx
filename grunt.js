"use strict";

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-shell');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      files: ['grunt.js', 'bin/**/*', 'lib/**/*.js']
    },
    shell: {
      doxx:{// --template docs/template.jade
        command:'./bin/doxx --source lib --target docs',
        stdout:true,
        stderr:true
      }
    },
    watch: {
      files: ['<config:lint.files>','views/*'],
      tasks: 'default shell:doxx'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint');
};
