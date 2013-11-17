define(["backbone", "mustache"], function(Backbone, Mustache) {

	var EditView = Backbone.View.extend({
		template: Mustache.compile($("#" + "edit" + "-template").html()),

		initialize: function() {
			console.log("> editView initialized");
		},

		render: function() {
			this.$el.html(this.template(this));
			return this;
		},

		// View helpers for populating templates
		name: function() {
			return "edit";
		}
	});

	return EditView;
});