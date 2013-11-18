define(["backbone", "mustache"], function(Backbone, Mustache) {
	
	var GoalView = Backbone.View.extend({
		
		template: Mustache.compile($("#" + "goal" + "-template").html()),
		
		initialize: function() {
			
		},
		
		events: {
			"click button#delete": "deleteGoal"
		},
		
		render: function() {
			this.$el.html(this.template(this));
			return this;
		},
		
		// Callbacks
		deleteGoal: function() {
			console.log("delete");
			this.model.destroy();
		},
		
		// Populate view
		name: function() { return this.model.name(); },
		days: function() { return this.model.days(); }
		
	});
	
	return GoalView;
	
});
