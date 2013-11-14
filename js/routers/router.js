var app = app || {};

app.router = Backbone.Router.extend({

	initialize: function(opt) {
		console.log("> router initialized");
		this.el = opt.el;
	},

	routes: {
		"": "index"
	},

	index: function() {
		var view = new app.mainView();
		this.el.empty();
		this.el.append(view.render().el);
	}

});