export default class Age {
  constructor(age, country, profession) {
    this.earthAge = age;
    this.country = country;
    this.profession = profession;
    this.mercuryAge = Math.round(0.24 * age);
    this.venusAge = Math.round(0.62 * age);
    this.marsAge = Math.round(1.88 * age);
    this.jupiterAge = Math.round(11.86 * age);
  }
  lifeExpancey() {
    let avergeAge = 85;
    let ageLeftOnEarth;
    ageLeftOnEarth = avergeAge - this.earthAge;
    return ageLeftOnEarth;
  }
}
