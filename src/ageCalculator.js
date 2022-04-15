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

    // let ageLeftOnmercury;
    // let ageLeftOnVenus;
    // let ageLeftOnJupiter;
    if (this.country === "Eritrea" && this.profession === "Engineer") {
      avergeAge = 85;
      this.earthAgeLeft = avergeAge - this.earthAge;
    } else if (this.country === "USA" && this.profession === "Athlete") {
      avergeAge = 96;
      this.earthAgeLeft = avergeAge - this.earthAge;
    } else {
      avergeAge = 80;
      this.earthAgeLeft = avergeAge - this.earthAge;
    }
  }
}
