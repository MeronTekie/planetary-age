import Age from "./../src/ageCalculator.js";
describe("Age", () => {
  let ages;
  beforeEach(() => {
    ages = new Age(24, "USA", "A");
  });
  test("Should successfully take the arguement and return the value to be the Earth age", () => {
    ages.lifeExpancey();
    expect(ages.earthAge).toEqual(24);
    expect(ages.country).toEqual("USA");
    expect(ages.profession).toEqual("A");
    expect(ages.mercuryAge).toEqual(6);
    expect(ages.venusAge).toEqual(15);
    expect(ages.jupiterAge).toEqual(285);
  });
  test("Should return the age left to live", () => {
    ages = new Age(36, "usa", "athlete");
    ages.lifeExpancey();
    expect(ages.earthAgeLeft).toEqual(44);
    ages = new Age(24, "uk", "engineer");
    ages.lifeExpancey();
    expect(ages.earthAgeLeft).toEqual(51);
    ages = new Age(24, "Oceania", "Athlete");
    ages.lifeExpancey();
    expect(ages.earthAgeLeft).toEqual(58);
  });
  test("Should return the age left to live in positive value", () => {
    ages = new Age(88, "USA", "Athlete");
    ages.lifeExpancey();
    ages.moreThanAverageAge();
    expect(ages.earthAgeLeft).toEqual(6);
    expect(ages.mercuryAgeLeft).toEqual(1);
    expect(ages.venusAgeLeft).toEqual(4);
    expect(ages.marsAgeLeft).toEqual(11);
    expect(ages.jupiterAgeLeft).toEqual(71);
    ages = new Age(25, "USA", "Athlete");
    ages.lifeExpancey();
    ages.moreThanAverageAge();
    expect(ages.earthAgeLeft).toEqual(57);
    expect(ages.mercuryAgeLeft).toEqual(14);
    expect(ages.venusAgeLeft).toEqual(35);
    expect(ages.marsAgeLeft).toEqual(107);
    expect(ages.jupiterAgeLeft).toEqual(676);
  });
});
