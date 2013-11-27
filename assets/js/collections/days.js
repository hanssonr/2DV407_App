define(["backbone", "day"], function(Backbone, Day) {

	var Days = Backbone.Collection.extend({
		model: Day
	});

	return Days;

});