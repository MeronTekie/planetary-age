export default class Age {
  constructor(age, country, profession) {
    this.earthAge = age;
    this.country = country;
    this.profession = profession;
    this.mercuryAge = Math.round(0.24 * age);
    this.venusAge = Math.round(0.62 * age);
    this.marsAge = Math.round(1.88 * age);
    this.jupiterAge = Math.round(11.86 * age);
    this.earthAgeLeft = 0;
    this.mercuryAgeLeft = 0;
    this.venusAgeLeft = 0;
    this.marsAgeLeft = 0;
  }
  lifeExpancey() {
    let avergeAge;

    if (this.country === "Eritrea" && this.profession === "Engineer") {
      avergeAge = 75;
      this.earthAgeLeft = avergeAge - this.earthAge;
      this.mercuryAgeLeft = (avergeAge - this.earthAge) * 0.24;
      this.venusAgeLeft = (avergeAge - this.earthAge) * 0.62;
      this.marsAgeLeft = (avergeAge - this.earthAge) * 1.88;
      this.jupiterAgeLeft = (avergeAge - this.earthAge) * 11.86;
    } else if (this.country === "USA" && this.profession === "Athlete") {
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
    if (
      this.earthAgeage > 75 &&
      this.country === "USA" &&
      this.profession === "Athlete"
    ) {
      Math.abs(this.earthAgeLeft);
      Math.abs(this.mercuryAgeLeft);
      Math.abs(this.venusAgeLeft);
      Math.abs(this.marsAgeLeft);
      Math.abs(this.jupiterAgeLeft);
    } else if (
      this.earthAgeage > 80 &&
      this.country === "Eritrea" &&
      this.profession === "Engineer"
    ) {
      Math.abs(this.earthAgeLeft);
      Math.abs(this.mercuryAgeLeft);
      Math.abs(this.venusAgeLeft);
      Math.abs(this.marsAgeLeft);
      Math.abs(this.jupiterAgeLeft);
    } else if (this.earthAge > 82) {
      Math.abs(this.earthAgeLeft);
      Math.abs(this.mercuryAgeLeft);
      Math.abs(this.venusAgeLeft);
      Math.abs(this.marsAgeLeft);
      Math.abs(this.jupiterAgeLeft);
    } else {
      this.earthAgeLeft;
      this.mercuryAgeLeft;
      this.venusAgeLeft;
      this.marsAgeLeft;
      this.jupiterAgeLeft;
    }
  }
}
