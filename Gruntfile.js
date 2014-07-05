// Generated on 2014-06-30 using generator-nodejs 2.0.0
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        complexity: {
            generic: {
                src: ['app/**/*.js'],
                options: {
                    errorsOnly: false,
                    cyclometric: 6,       // default is 3
                    halstead: 16,         // default is 8
                    maintainability: 100  // default is 100
                }
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'app/**/*.js',
                'test/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        mochacov: {
            test: {
                options: {
                    reporter: 'spec',
                    ui: 'tdd'
                }
            },
            travis: {
                options: {
                    coveralls: true
                }
            },
            coverage: {
                options: {
                    reporter: 'html-cov',
                    output: 'coverage.html'
                }
            },
            options: {
                files: ['test/**/*.js']
            }
        },
        watch: {
            js: {
                files: ['**/*.js', '!node_modules/**/*.js'],
                tasks: ['default'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-complexity');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-cov');
    grunt.registerTask('test', ['complexity', 'jshint', 'mochacov:test', 'watch']);
    grunt.registerTask('build', ['complexity', 'jshint', 'mochacov:coverage']);
    grunt.registerTask('ci', ['complexity', 'jshint', 'mochacov:travis']);
    grunt.registerTask('default', ['test']);
};
