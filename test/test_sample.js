/* global suite, test */
"use strict";

let assert = require("assert");

suite("sample");

test("basics", () => {
	assert.strictEqual(1, 2, "oops");
});
