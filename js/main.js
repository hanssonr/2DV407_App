// Require config
require.config({
	paths: {
		"jquery": "libs/jquery-2.0.3.min",
		"backbone": "libs/backbone",
		"backbone.localStorage": "libs/backbone.localStorage",
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

		console.log("> main initialized");
		var container = $("#main");
		var router = new Router({el: container});
		Backbone.history.start();

	});

});