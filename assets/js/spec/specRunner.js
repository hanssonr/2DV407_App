// Require config
require.config({
	baseUrl: "assets/",
	paths: {
		"text": "js/libs/text",
		"jquery": "js/libs/jquery-2.0.3.min",
		"purebackbone": "js/libs/backbone/backbone.dev",
		"backbone.localStorage": "js/libs/backbone/backbone.localStorage",
		"backbone-validation": "js/libs/backbone/backbone-validation-min",
		"backbone.rel": "js/libs/backbone/backbone.rel",
		"backbone": "js/libs/backbone/backbone",
		"bootstrap": "js/libs/bootstrap",
		"mustache": "js/libs/mustache",
		"underscore": "js/libs/underscore",
		"router": "js/routers/router",
		"indexview": "js/views/indexView",
		"editview": "js/views/editView",
		"addgoalview": "js/views/addGoalView",
		"goalsview": "js/views/goalsView",
		"goalview": "js/views/goalView",
		"goal": "js/models/goal",
		"goals": "js/collections/goals",
		"day": "js/models/day",
		"days": "js/collections/days",
		"daysview": "js/views/daysView",
		"dayview": "js/views/dayView",
		"jasmine": "js/libs/jasmine-1.3.1/jasmine",
		"jasmine-html": "js/libs/jasmine-1.3.1/jasmine-html",
		"spec": "js/spec/"
	},

	shim: {
		"underscore": {
			exports: "_"
		},
		"purebackbone": {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		"backbone.localStorage": ["purebackbone", "underscore"],
		"backbone-validation": ["purebackbone", "underscore"],
		"backbone.rel": ["purebackbone", "underscore"],

		"jasmine": {
			exports: "jasmine"
		},
		"jasmine-html": {
			deps: ["jasmine"],
			exports: "jasmine"
		}
	}
});

require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){

	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var htmlReporter = new jasmine.HtmlReporter();
	jasmineEnv.addReporter(htmlReporter);

	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};

	var specs = [];

	specs.push('spec/models/goalSpec');

	$(function(){
		require(specs, function(){
			jasmineEnv.execute();
		});
	});
});
