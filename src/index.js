import { convertToNumber, setOutputHtml } from "./html";
import { add } from "./math";
import CalculatorData from "./images/calculator.svg";
import "./index.css";

console.log("This my app!");

const [a] = document.getElementsByName("a");
const [b] = document.getElementsByName("b");
const form = document.getElementById("calc-form");
const output = document.getElementById("output");
const header = document.getElementById("header");

const img = document.createElement("img");
img.alt = "Calculator";
img.src = CalculatorData;
img.setAttribute("class", "ml-auto h-14 w-auto");
header.appendChild(img);

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const numA = convertToNumber(a);
  const numB = convertToNumber(b);
  const result = add(numA, numB);
  setOutputHtml(output, { numA, numB, result });
});
