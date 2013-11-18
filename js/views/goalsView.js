define(["backbone", "mustache", "goalview"], function(Backbone, Mustache, GoalView) {
	
	var GoalsView = Backbone.View.extend({
		
		initialize: function() {
			console.log("> goalsView initialized");
		},
		
		render: function() {
			
			this.collection.each(function(goal) {
				var goalView = new GoalView({model: goal});
				this.$el.append(goalView.render().el);
				
			}, this);
			
			return this;
		}
	});
	
	return GoalsView;
	
});
