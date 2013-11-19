define(["backbone", "indexview", "editview", "backbone.localStorage"], function(Backbone, IndexView, EditView) {

	var Router = Backbone.Router.extend({

		initialize: function(opt) {
			this.el = opt.el;
		},

		routes: {
			"": "index",
			"edit/:goal": "edit"
		},

		index: function() {
			var view = new IndexView();
			this.el.empty();
			this.el.append(view.render().el);
		},

		edit: function(goal) {
			console.log(goal);
			var view = new EditView();
			this.el.empty();
			this.el.append(view.render().el);
		}
	});

	return Router;
});