define(["backbone", "mustache"], function(Backbone, Mustache){

	var AddGoalView = Backbone.View.extend({

		tagName: "form",
		className: "form",
		template: Mustache.compile($("#" + "goal-form" + "-template").html()),

		initialize: function() {
			console.log("> AddGoalView initialized");
		},
		
		events: {
			"submit": "submit"
		},

		render: function() {
			console.log("> render");
			this.$el.html(this.template(this));
			return this;
		},
		
		// Callbacks from events
		submit: function(event) {
			event.preventDefault();
			
			this.collection.create({
				name: this.$("input#name").val()
			});
			
			console.log("> submit pressed with " + "name: " + this.$("input#name").val());
		},
	});

	return AddGoalView;

});