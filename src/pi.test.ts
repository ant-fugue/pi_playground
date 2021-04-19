import { f, g } from "./pi";
import { describe, Suite, it } from "mocha";
import * as assert from "assert";

describe("", () => {
  it("should return number", () => {
    assert.deepEqual(typeof f(10), "number");
    assert.deepEqual(typeof g(10), "number");
  });
  it("approaches the actual pi value if the argument becomes more and more bigger", () => {
    assert.deepEqual(
      Math.abs(Math.PI - g(1)) > Math.abs(Math.PI - g(10)),
      true
    );
    assert.deepEqual(
      Math.abs(Math.PI - g(10)) > Math.abs(Math.PI - g(100)),
      true
    );
  });
});
