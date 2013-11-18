define(["backbone", "goal"], function(Backbone, Goal){

	var Goals = Backbone.Collection.extend({
		model: Goal,
		localStorage: new Store("goals")
	});

	return Goals;

});