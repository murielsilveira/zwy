module.exports = function(grunt) {
    'use strict';

    // configuração do projeto
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'app/assets/js/main.js']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy HH:MM:ss") %> */\n'
            },
            dist: {
                files: {
                    'app/assets/js/main.min.js': ['app/assets/js/main.js']
                }
            }
        },
        cssmin: {
            dist: {
                src: ['app/assets/css/main.css'],
                dest: 'app/assets/css/main.min.css'
            }
        },
        watch: {
            css: {
                files: ['app/assets/css/main.css'],
                tasks: ['cssmin']
            },
            js: {
                files: ['app/assets/js/main.js'],
                tasks: ['jshint', 'uglify']
            }
        }
    };

    grunt.initConfig(gruntConfig);

    // carregando plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tarefas
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
};