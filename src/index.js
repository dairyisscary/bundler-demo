import { convertToNumber, setOutputHtml } from "./html";
import { add } from "./math";

console.log("This my app!");

const [a] = document.getElementsByName("a");
const [b] = document.getElementsByName("b");
const form = document.getElementById("calc-form");
const output = document.getElementById("output");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const numA = convertToNumber(a);
  const numB = convertToNumber(b);
  const result = add(numA, numB);
  setOutputHtml(output, result);
});
