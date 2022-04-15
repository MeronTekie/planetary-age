export default class Age {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = 0.24 * age;
    this.venusAge = 0.62 * age;
    this.marsAge = 1.88 * age;
    this.jupiterAge = 11.86 * age;
  }
}
