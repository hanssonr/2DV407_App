define(["backbone", "mustache"], function(Backbone, Mustache){

	var MainView = Backbone.View.extend({

		template: Mustache.compile($("#" + "main" + "-template").html()),

		initialize: function() {
			console.log("> mainView initialized");
		},

		render: function() {
			this.$el.html(this.template(this));
			return this;
		},

		// View helpers for populating templates
		count: function() {
			return 1;
		}
	});
	return MainView;
});