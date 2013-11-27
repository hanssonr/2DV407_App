define(["backbone", "mustache", "dayview"], function(Backbone, Mustache, DayView) {

	var DaysView = Backbone.View.extend({

		initialize: function() {

		},

		render: function() {
			this.collection.each(function(day){
				if(day.isValid(true)) {
					var dayView = new DayView({model: day});
					this.$el.append(dayView.render().el);
				}

			}, this);

			return this;
		}
	});

	return DaysView;

});