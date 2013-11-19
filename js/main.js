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
		"goals": "collections/goals"
	},

	shim: {
		"underscore": {
			exports: "_"
		},
		"backbone": {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}
});

require(["jquery", "router", "backbone", "underscore"], function($, Router, Backbone, _) {

	$(function() {

		var container = $("#main");
		var router = new Router({el: container});
		Backbone.history.start();

	});

});