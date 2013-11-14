var app = app || {};

// Helper for compiling mustache-template
var template = function(name) {
	return Mustache.compile($("#" + name + "-template").html());
};

app.mainView = Backbone.View.extend({

	template: template("main"),

	initialize: function() {
		console.log("> view initialized");
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