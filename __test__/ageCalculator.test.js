import Age from "./../src/ageCalculator.js";
describe("Age", () => {
  test("Should successfully take the arguement and return the value to be the Earth age", () => {
    const ages = new Age(24);
    expect(ages.earthAge).toEqual(24);
  });
});
