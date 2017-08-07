module.exports = function(grunt) {
	'use strict';

	// DEFINE DIRECTORY
	var gruntConfig = {};

	gruntConfig.back = {};

	gruntConfig.front = {};

	gruntConfig.front = {
		src: 'src/',
		dest: 'assets/'
	};

	// DEFINE YOUR VERSION NAME
	grunt.initConfig({
		globalConfig: gruntConfig,
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
						' * Wesley Tomé v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
						' * Copyright 2017-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
						' */\n',
		jqueryCheck: 'if (typeof jQuery === \'undefined\') { throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\') }\n\n',

		// COMBINE JS FILES
		
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				// Files Array Format
				files: [
					{ src: [
						'<%= globalConfig.front.src %>_js/site.min.js',
						'<%= globalConfig.front.src %>_js/teste.min.js'
						],
						dest:
						'<%= globalConfig.front.dest %>js/site.min.js'
					}
				]
			}
		},

	// JS TESTING
		/*jshint: {
			files: [
				'Gruntfile.js',
				'<%= globalConfig.src %>/_js/app.js',
				'<%= globalConfig.src %>/_js/smartwidgets'
			],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},*/

		// MINIFY JS FILE
		uglify: {
			options: {
				//banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
				mangle: false,
				preserveComments: false,
				compress: {
					// drop_console: true
				},
			},
			frontend: {
				files: [{
					expand: true,
					cwd: '<%= globalConfig.front.src %>/js',
					src: ['*.js', '!**/*.min.js'],
					dest: '<%= globalConfig.front.src %>/_js/',
					extDot: 'last',
					ext: '.min.js'
				}]
			}
		},

		// MINIFY CSS
		cssmin: {
			frontend: {
				expand: true,
				cwd: '<%= globalConfig.front.src %>/css/',
				src: ['*.css', '!*.min.css'],
				dest: '<%= globalConfig.front.src %>/_css/',
				extDot: 'last',
				ext: '.min.css'
			}
		},

		copy: {
			frontend: {
				files: [
					{
						expand: true,
						cwd: '<%= globalConfig.front.src %>/_css',
						// src: ['**/*.min.css'],
						src: ['site.min.css'],
						dest: '<%= globalConfig.front.dest %>/css/'
					},
					{
						expand: true,
						cwd: '<%= globalConfig.front.src %>/js',
						src: ['**/*.min.js'],
						dest: '<%= globalConfig.front.dest %>/js/'
					}
				]
			}
		},

		sass: {
			frontend: {
				options: {
					style: 'compressed',
				},
				files: [{
					expand: true,
					cwd: '<%= globalConfig.front.src %>/scss',
					src: ['*.scss', '*.sass'],
					dest: '<%= globalConfig.front.src %>/css/',
					ext: '.css'
				}]
			}
		},

		// WATCH FILES FOR CHANGES
		watch: {
			frontend: {
				files: ['<%= globalConfig.front.src %>/site.scss','<%= globalConfig.front.src %>/js/site.js'],
				tasks: ['sass','cssmin']
			}
		},
	});


	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('dist-test', ['jshint']);
	grunt.registerTask('default', ['uglify', 'sass','cssmin','copy', 'concat']);
	// grunt.registerTask('dist-less', ['sass','cssmin']);
	grunt.registerTask('dist-js', ['uglify']);
	grunt.registerTask('dist-watch', ['watch']);


};