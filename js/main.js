(function() {
	var app = app || {};
	window.app = app;

	// Entry point
	app.run = function(container) {
		container = $(container);
		console.log("> main initialized");

		// Initialize the router
		var router = new app.router({el: container});
		Backbone.history.start();
	};

})();