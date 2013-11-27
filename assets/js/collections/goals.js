define(["backbone", "goal"], function(Backbone, Goal){

	var Goals = Backbone.Collection.extend({
		model: Goal,
		localStorage: new Backbone.LocalStorage("Goals"),

		// Getting a specific goal by id
		getGoalById: function(id) {
			return this.find(function(goal){
				return goal.id == id;
			});
		}
	});

	return Goals;

});