import Age from "./../src/ageCalculator.js";
describe("Age", () => {
  let ages;
  beforeEach(() => {
    ages = new Age(24, "USA", "A");
  });
  test("Should successfully take the arguement and return the value to be the Earth age", () => {
    expect(ages.earthAge).toEqual(24);
    expect(ages.country).toEqual("USA");
    expect(ages.profession).toEqual("A");
    expect(ages.mercuryAge).toEqual(6);
    expect(ages.venusAge).toEqual(15);
    expect(ages.jupiterAge).toEqual(285);
  });
  test("Should return the age left to live", () => {
    ages.lifeExpancey();
    expect(ages.earthAgeLeft).toEqual(56);
  });
});
