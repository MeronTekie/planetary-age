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
    ages = new Age(24, "USA", "Athlete");
    ages.lifeExpancey();
    expect(ages.earthAgeLeft).toEqual(56);
    ages = new Age(24, "UK", "Engineer");
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
    expect(ages.earthAgeLeft).toEqual(8);
    expect(ages.mercuryAgeLeft).toEqual(2);
    expect(ages.venusAgeLeft).toEqual(5);
    expect(ages.marsAgeLeft).toEqual(15);
    expect(ages.jupiterAgeLeft).toEqual(95);
    ages = new Age(25, "USA", "Athlete");
    ages.lifeExpancey();
    ages.moreThanAverageAge();
    expect(ages.earthAgeLeft).toEqual(55);
    expect(ages.mercuryAgeLeft).toEqual(13);
    expect(ages.venusAgeLeft).toEqual(34);
    expect(ages.marsAgeLeft).toEqual(103);
    expect(ages.jupiterAgeLeft).toEqual(652);
  });
});
