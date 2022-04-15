import Age from "./../src/ageCalculator.js";
describe("Age", () => {
  let ages;
  beforeEach(() => {
    ages = new Age(24, "Eritrea", "Engineer");
  });
  test("Should successfully take the arguement and return the value to be the Earth age", () => {
    expect(ages.earthAge).toEqual(24);
    expect(ages.country).toEqual("Eritrea");
    expect(ages.profession).toEqual("Engineer");
    expect(ages.mercuryAge).toEqual(6);
    expect(ages.venusAge).toEqual(15);
    expect(ages.jupiterAge).toEqual(285);
  });
  test("Should return the age left to live", () => {
    expect(ages.lifeExpancey()).toEqual(61);
  });
});
