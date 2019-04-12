/* global suite, test */
"use strict";

import { strictEqual as assertSame, deepStrictEqual as assertDeep } from "assert";

suite("sample");

test("basics", () => {
	assertSame(1, 2, "oops");
});
