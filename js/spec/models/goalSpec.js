define(["goal", "jasmine"], function(Goal, jasmine) {
	return describe("Test for Model :: Goal", function() {
		
		it("Can be created with default values", function() {
			var goal = new Goal();
			expect(goal.get("name")).toBe("Untitled Goal");
			expect(goal.get("days")).toBe(0);
		});
		
		it("Should contain validation for attribute name", function() {
			var errorCallback = jasmine.createSpy("- invalid event callback -");
			
			var goal = new Goal();
			goal.on("invalid", errorCallback);
			
			goal.set({name: 1});
			
			var errorArgs = errorCallback.mostRecentCall.args;
			
			expect(errorArgs).toBeDefined();
			expect(errorArgs[0]).toBe(goal);
			expect(errorArgs[1]).toBe("Name must be valid (1-12 letters[a-öA-Ö])");
		});
		
	});
});
