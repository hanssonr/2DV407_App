define(["backbone", "mustache"], function(Backbone, Mustache) {

	var EditView = Backbone.View.extend({
		template: Mustache.compile($("#" + "edit" + "-template").html()),

		initialize: function(goalId) {
			console.log("> editView initialized");

			this.goalId = 1;
		},

		render: function() {
			this.$el.html(this.template(this));
			return this;
		},

		// View helpers for populating templates
		name: function() { return "edit"; },
		id: function() { return this.goalId; }
	});

	return EditView;

});