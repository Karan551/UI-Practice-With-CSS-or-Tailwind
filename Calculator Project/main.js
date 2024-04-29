const inputField = document.querySelector("#num-input");
let result;
// const btn1 = document.querySelector("button");

const btn = document.querySelectorAll("button");
const btnArray = Array.from(btn);
btnArray.map((eachElement) => {
  eachElement.addEventListener("click", (e) => {
    const currentValue = e.target.textContent;
    if (currentValue.toLowerCase() === "reset") {
      inputField.value = "";
    } else if (currentValue.toLowerCase() === "del") {
      inputField.value = inputField.value.slice(0, -1);
    } else if (currentValue === "+") {
      inputField.value += currentValue;
      result = inputField.value;
    } else if (currentValue === "=") {
      // This is result section
      result = inputField.value;
      const operator = ["+", "-", "x", "/"];
      if (result === "" || operator.includes(result.slice(-1))) return;
      // here we will write condition
      if (result.includes("x")) {
        result = result.replaceAll("x", "*");
        inputField.value = eval(result);
      } else {
        inputField.value = eval(result);
      }
    } else {
      inputField.value += currentValue;
    }
  });
});
