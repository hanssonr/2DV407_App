define(["backbone", "mustache"], function(Backbone, Mustache) {

	var GoalView = Backbone.View.extend({

		template: Mustache.compile($("#" + "goal" + "-template").html()),

		initialize: function() {

		},

		events: {
			"click button#delete": "deleteGoal",
			"click button#add-day": "addDay"
		},

		render: function() {
			this.$el.html(this.template(this));
			return this;
		},

		// Callbacks
		deleteGoal: function() {
			this.model.destroy();
		},

		addDay: function() {
			this.model.addDay();
			this.model.save();
		},

		// Populate view
		name: function() { return this.model.name(); },
		days: function() { return this.model.days(); }

	});

	return GoalView;

});
