var Todo = Backbone.Model.extend({
	defaults: {
		completed: false
	},

	validate: function(attr) {
		if(attr.title === undefined) {
			return "Remember to set a title";
		}
	},

	initialize: function() {
		console.log("This model has been initialized");

		// Event listener
		this.on("change:title", function() {
			console.log("- Values for this model has changed");
		});

		this.on("invalid", function(model, error) {
			console.log(error);
		});
	},

	setTitle: function(newTitle) {
		this.set("title", newTitle);
	}
});

var todo1 = new Todo();
// Causes a validation error
todo1.set("completed", true, {validate: true});

console.log(JSON.stringify(todo1));

var todo2 = new Todo({
	title: "Title title",
	completed: true
});

console.log("JSON stringify: " + JSON.stringify(todo2));
console.log("Title by get: " + todo2.get("title"));
console.log("Completed by get: " + todo2.get("completed"));
console.log("toJSON(): " + todo2.toJSON());

todo2.set("title", "new value new title");
todo2.set("completed", false);

console.log("Set: " + JSON.stringify(todo2));

// Set map of attributes
todo2.set({
	title: "heya",
	completed: true
});