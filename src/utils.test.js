import { add } from "./utils";

describe("Testing Utils", () => {
  describe("Test 'add' function taking numbers seperated by comma", () => {
    test("function takes input as empty string and output as 0", () => {
      expect(add("")).toBe(0);
    });

    test("function takes input as '1' and output as 1", () => {
      expect(add("1")).toBe(1);
    });

    test("function takes input as '1,5' and output as 6", () => {
      expect(add("1,5")).toBe(6);
    });
  });

  describe("Test 'add' function taking numbers seperated by comma & newline char", () => {
    test("function takes input as '1\n2,3' and output as 6", () => {
      expect(add("1\n2,3")).toBe(6);
    });
  });

  describe("Test 'add' function taking numbers seperated by specific delimitors", () => {
    test("function takes input as '//;\n1;2' and output as 3", () => {
      expect(add("//;\n1;2")).toBe(3);
    });
  });

  describe("Test 'add' function taking negative numbers", () => {
    test("function takes negative number as input throws error", () => {
      expect(() => add("-1,2")).toThrow("-1");
      expect(() => add("-1,-2")).toThrow("-1,-2");
      expect(() => add("-1,-2,3")).toThrow("-1,-2");
      expect(() => add("-1,-2,-3")).toThrow("-1,-2,-3");
    });
  });
});
