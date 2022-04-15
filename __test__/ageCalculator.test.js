import Age from "./../src/ageCalculator.js";
describe("Age", () => {
  test("Should successfully take the arguement and return the value to be the Earth age", () => {
    const ages = new Age(24, "Eritrea", "Engineer");

    expect(ages.earthAge).toEqual(24);
    expect(ages.country).toEqual("Eritrea");
    expect(ages.profession).toEqual("Engineer");
    expect(ages.mercuryAge).toEqual(6);
    expect(ages.venusAge).toEqual(15);
    expect(ages.jupiterAge).toEqual(285);
  });
});
