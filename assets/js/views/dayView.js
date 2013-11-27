define(["backbone", "mustache", "text!templates/dayTemplate.html"], function(Backbone, Mustache, dayTemplate) {

	var DayView = Backbone.View.extend({

		template: Mustache.compile(dayTemplate),

		initialize: function() {

		},

		events: {

		},

		render: function() {
			this.$el.html(this.template(this));
			return this;
		},

		// Callbacks

		// Populate view
		descr: function() { return this.model.get("descr"); },
		date: function() { return this.model.get("date"); }
	});

	return DayView;

});