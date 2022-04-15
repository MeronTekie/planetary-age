import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Age from "./ageCalculator.js";

$(document).ready(function () {
  $("#age-calculator").submit(function (event) {
    event.preventDefault();
    let age = parseInt($("#age").val());
    let country = $("#country").val();
    let profession = $("#profession").val();

    const myAge = new Age(age, country, profession);
    myAge.lifeExpancey();
    myAge.moreThanAverageAge();

    if (myAge.earthAge < 75) {
      $("#result").removeClass("output");
      $("#earth").text("Your Age  in Earth: " + myAge.earthAge);
      $("#mercury").text("Your Age in Mercury: " + myAge.mercuryAge);
      $("#venus").text("Your Age in Venus : " + myAge.venusAge);
      $("#mars").text("Your Age in Mars : " + myAge.marsAge);
      $("#jupiter").text("Your Age in  Jupiter: " + myAge.jupiterAge);
    } else {
      $("#result").removeClass("output");
      $("#earth").text(
        "Your Age  in Earth has exceeded by: " + myAge.earthAgeLeft
      );
      $("#mercury").text(
        "Your Age in Mercury has exceeded by: " + myAge.mercuryAgeLeft
      );
      $("#venus").text(
        "Your Age in Venus has exceeded by: " + myAge.venusAgeLeft
      );
      $("#mars").text("Your Age in Mars has exceeded by: " + myAge.marsAgeLeft);
      $("#jupiter").text(
        "Your Age in  Jupiter has exceeded by: " + myAge.jupiterAgeLeft
      );
    }
  });
});
