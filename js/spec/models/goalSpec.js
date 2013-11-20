define(["goal", "jasmine", "backbone", "backbone-validation"], function(Goal, jasmine, Backbone) {
	return describe("Test for Model :: Goal", function() {

		it("Can be created with default values", function() {
			var goal = new Goal();
			expect(goal.get("name")).toBe("");
			expect(goal.get("days")).toBe(0);
		});

		it("Should contain validation for attribute name", function() {
			var errorCallback = jasmine.createSpy("- invalid event callback -");

			var goal = new Goal();

			Backbone.Validation.bind(this, {
				model: goal,
				valid: function(view, attr) {
				},
				invalid: function(view, attr, error) {
				}
			});


			goal.on("invalid", errorCallback);
			goal.set("name", "==}}}}}}", {validate: true});

			var errorArgs = errorCallback.mostRecentCall.args;

			expect(errorArgs).toBeDefined();
			expect(errorArgs[0]).toBe(goal);
			expect(errorArgs[1].name).toBe("Please enter valid characters (a-zåäöA-ZÅÄÖ0-9)");
		});

	});
});
