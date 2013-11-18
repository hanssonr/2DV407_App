define(["backbone", "mustache", "goals", "addgoalview", "goalsview"], function(Backbone, Mustache, Goals, AddGoalView, GoalsView) {

	var IndexView = Backbone.View.extend({

		template: Mustache.compile($("#" + "index" + "-template").html()),

		initialize: function() {
			console.log("> indexView initialized");

			// The collection
			this.goals = new Goals();
			this.goals.on("all", this.render, this);
			this.goals.fetch();
		},
		
		render: function() {
			this.$el.html(this.template(this));

			// Subviews that are supposed to show in this view
			var addGoalView = new AddGoalView( {collection: this.goals} );
			var goalsView = new GoalsView( {collection: this.goals} );
			
			// Render and append the views element (el)
			this.$(".addGoal").append(addGoalView.render().el);
			this.$(".goals").append(goalsView.render().el);

			return this;
		},

		// View helpers for populating templates
		count: function() {
			return this.goals.length;
		}
	});

	return IndexView;

});