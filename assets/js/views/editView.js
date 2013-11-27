define(["backbone", "mustache", "goals", "goal", "daysview", "text!templates/editTemplate.html"], function(Backbone, Mustache, Goals, Goal, DaysView, editTemplate) {

	var EditView = Backbone.View.extend({
		template: Mustache.compile(editTemplate),

		initialize: function(opt) {
			this.goals = new Goals();
			this.goals.fetch();
			this.goal = this.goals.getGoalById(opt.goalId);
			this.goal.days.fetch();
		},

		render: function() {
			this.$el.html(this.template(this));

			// Subviews, in this case daysview
			var daysView = new DaysView( { collection: this.goal.days } );

			this.$(".days").append(daysView.render().el);

			return this;
		},

		// View helpers for populating templates
		name: function() { return "edit"; },
		count: function() { return this.goal.days.length; }
	});

	return EditView;

});