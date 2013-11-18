define(["backbone"], function(Backbone){

	var Goal = Backbone.Model.extend({

		defaults: {
			name: "",
			days: 0
		},
		
		validate: function(attrs) {
			
			if(!attrs.name) {
				return "Please fill name field";
			}
			
			if(attrs.hasOwnProperty("name") && !_.isString(attrs.name)) {
				console.log("validate error");
				return "Name must be valid (1-12 letters[a-öA-Ö])";
			}
		},

		initialize: function() {

		},
		
		name: function() { return this.get("name"); },
		days: function() { return this.get("days"); }

	});

	return Goal;

});