define(["backbone", "mustache"], function(Backbone, Mustache) {

	var DayView = Backbone.View.extend({

		template: Mustache.compile(),

		initialize: function() {

		},

		events: {

		},

		render: function() {
			return this;
		}

		// Callbacks

		// Populate view
	});

	return DayView;

});