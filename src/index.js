import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
// import Age from "./ageCalculator.js";

$(document).ready(function () {
  $("#age-calculator").submit(function (event) {
    event.preventDefault();
    // let age = parseInt($("#age").val());
    // let country = $("#country").val();
    // let profession = $("#profession").val();

    // const myAge = new Age(age, country, profession);
    // myAge.lifeExpancey();
    // myAge.moreThanAverageAge();

    // if (myAge.earthAge < 82) {
    // }
  });
});
