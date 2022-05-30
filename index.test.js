const { fizzBuzz, fetchData } = require("./index");

describe("FizzBuzz", () => {
  test("Should return 7", () => {
    expect(fizzBuzz(7)).toEqual(7);
  });
  test("Should return Fizz", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });
  test("Should return Buzz", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });
  test("Should return FizzBuzz", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });
});

describe("Testing api", () => {
  test("Testing api", async () => {
    const data = await fetchData();
    expect(data.data.title).toBe("quidem molestiae enim");
  });
});
