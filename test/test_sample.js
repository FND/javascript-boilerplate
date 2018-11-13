/* eslint-env browser */
/* global QUnit */

QUnit.module("sample");

QUnit.test("dummy", t => {
	let el = fixtures().querySelector("p");
	t.strictEqual(el.textContent, "lorem ipsum");
});

function fixtures() {
	return document.getElementById("qunit-fixture");
}
