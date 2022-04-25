export default class Age {
  constructor(age, country, profession) {
    this.earthAge = age;
    this.country = country;
    this.profession = profession;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.earthAgeLeft = 0;
    this.mercuryAgeLeft = 0;
    this.venusAgeLeft = 0;
    this.marsAgeLeft = 0;
  }
  lifeExpancey() {
    this.mercuryAge = Math.round(0.24 * this.earthAge);
    this.venusAge = Math.round(0.62 * this.earthAge);
    this.marsAge = Math.round(1.88 * this.earthAge);
    this.jupiterAge = Math.round(11.86 * this.earthAge);
    let avergeAge;

    if (this.country === "uk" && this.profession === "engineer") {
      avergeAge = 75;

      this.earthAgeLeft = avergeAge - this.earthAge;
      this.mercuryAgeLeft = (avergeAge - this.earthAge) * 0.24;
      this.venusAgeLeft = (avergeAge - this.earthAge) * 0.62;
      this.marsAgeLeft = (avergeAge - this.earthAge) * 1.88;
      this.jupiterAgeLeft = (avergeAge - this.earthAge) * 11.86;
    } else if (this.country === "usa" && this.profession === "athlete") {
      avergeAge = 80;
      this.earthAgeLeft = avergeAge - this.earthAge;
      this.mercuryAgeLeft = (avergeAge - this.earthAge) * 0.24;
      this.venusAgeLeft = (avergeAge - this.earthAge) * 0.62;
      this.marsAgeLeft = (avergeAge - this.earthAge) * 1.88;
      this.jupiterAgeLeft = (avergeAge - this.earthAge) * 11.86;
    } else {
      avergeAge = 82;
      this.earthAgeLeft = avergeAge - this.earthAge;
      this.mercuryAgeLeft = (avergeAge - this.earthAge) * 0.24;
      this.venusAgeLeft = (avergeAge - this.earthAge) * 0.62;
      this.marsAgeLeft = (avergeAge - this.earthAge) * 1.88;
      this.jupiterAgeLeft = (avergeAge - this.earthAge) * 11.86;
    }
  }
  moreThanAverageAge() {
    if (this.earthAgeLeft < 0) {
      this.earthAgeLeft = Math.round(Math.abs(this.earthAgeLeft));
      this.mercuryAgeLeft = Math.round(Math.abs(this.mercuryAgeLeft));
      this.venusAgeLeft = Math.round(Math.abs(this.venusAgeLeft));
      this.marsAgeLeft = Math.round(Math.abs(this.marsAgeLeft));
      this.jupiterAgeLeft = Math.round(Math.abs(this.jupiterAgeLeft));
    } else {
      this.earthAgeLeft = Math.round(this.earthAgeLeft);
      this.mercuryAgeLeft = Math.round(this.mercuryAgeLeft);
      this.venusAgeLeft = Math.round(this.venusAgeLeft);
      this.marsAgeLeft = Math.round(this.marsAgeLeft);
      this.jupiterAgeLeft = Math.round(this.jupiterAgeLeft);
    }
  }
}
