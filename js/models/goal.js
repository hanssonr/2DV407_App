define(["backbone"], function(Backbone){

	var Goal = Backbone.Model.extend({

		defaults: {
			name: "Untitled Goal",
			days: 0
		},

		initialize: function() {

		},
		
		name: function() { return this.get("name"); },
		days: function() { return this.get("days"); }

	});

	return Goal;

});