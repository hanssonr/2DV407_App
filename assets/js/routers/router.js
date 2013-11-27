define(["backbone", "indexview", "editview"], function(Backbone, IndexView, EditView) {

	var Router = Backbone.Router.extend({

		// This is probably not that good of solution
		/*
		views: (function() {
			var indexView = new IndexView();
			var editView = new EditView();

			return {
				index: function() {
					return indexView;
				},

				edit: function() {
					return editView;
				}
			};

		})(),
		*/

		initialize: function(opt) {
			this.el = opt.el;
		},

		routes: {
			"": "index",
			"edit/:goalId": "edit"
		},

		index: function() {
			var view = new IndexView();
			this.el.empty();
			this.el.append(view.render().el);
		},

		edit: function(goalId) {
			var view = new EditView( {goalId: goalId} );
			this.el.empty();
			this.el.append(view.render().el);
		}
	});

	return Router;

});