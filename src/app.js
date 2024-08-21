/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The government ", "My teacher ", "The mailman ", "My bird "];
  let action = ["ate", "peed", "stole", "burned"];
  let what = ["my homework", "my pants", "the council", "a truck of manure"];
  let when = [
    "during church services",
    "when I was jogging",
    "while I was bungee jumping",
    "while I was fighting crime"
  ];
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  document.querySelector("#Pepito").innerHTML =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];
};
