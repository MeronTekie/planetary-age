import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Age from "./ageCalculator.js";

$(document).ready(function () {
  $("#triangle-checker-form").submit(function (event) {
    event.preventDefault();
  });
});
