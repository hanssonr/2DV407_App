define(["backbone", "mainview", "editview"], function(Backbone, MainView, EditView) {

	var Router = Backbone.Router.extend({

		initialize: function(opt) {
			console.log("> router initialized");
			this.el = opt.el;
		},

		routes: {
			"": "index",
			"edit": "edit"
		},

		index: function() {
			console.log("here we are");
			var view = new MainView();
			this.el.empty();
			this.el.append(view.render().el);
		},

		edit: function() {
			var view = new EditView();
			this.el.empty();
			this.el.append(view.render().el);
		}
	});

	return Router;
});