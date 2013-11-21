define(["backbone", "mustache", "goalview"], function(Backbone, Mustache, GoalView) {

	var GoalsView = Backbone.View.extend({

		initialize: function() {
		},

		render: function() {

			this.collection.each(function(goal) {

				if(goal.isValid(true)) {
					var goalView = new GoalView({model: goal});
					// this.$(".row").append(goalView.render().el);
					this.$el.append(goalView.render().el);
				}

			}, this);

			return this;
		}
	});

	return GoalsView;

});
