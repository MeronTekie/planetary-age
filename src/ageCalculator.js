export default class Age {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = Math.round(0.24 * age);
    this.venusAge = Math.round(0.62 * age);
    this.marsAge = Math.round(1.88 * age);
    this.jupiterAge = Math.round(11.86 * age);
  }
}
