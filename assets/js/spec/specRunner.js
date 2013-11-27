// Require config
require.config({
	baseUrl: "js/",
	paths: {
		"jquery": "libs/jquery-2.0.3.min",
		"backbone": "libs/backbone",
		"backbone.localStorage": "libs/backbone.localStorage",
		"backbone-validation": "libs/backbone-validation-amd-min",
		"bootstrap": "libs/bootstrap",
		"mustache": "libs/mustache",
		"underscore": "libs/underscore",
		"router": "routers/router",
		"indexview": "views/indexView",
		"editview": "views/editView",
		"addgoalview": "views/addGoalView",
		"goalsview": "views/goalsView",
		"goalview": "views/goalView",
		"goal": "models/goal",
		"goals": "collections/goals",
		"jasmine": "libs/jasmine-1.3.1/jasmine",
		"jasmine-html": "libs/jasmine-1.3.1/jasmine-html",
		"spec": "spec/"
	},

	shim: {
		"underscore": {
			exports: "_"
		},
		"backbone": {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
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
