const findLongestString = require("./findLongestString.js");

describe("findLongestString", () => {
  it("there are only strings allowed", () => {
    expect(findLongestString(["welcome", "hey", "hello", 2])).toBe(
      "only strings are allowed"
    );
  });
  it("find the longest string", () => {
    expect(findLongestString(["welcome", "hey", "hello"])).toBe("welcome");
  });
});
