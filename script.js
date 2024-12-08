document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");

  function displayValues() {
    const buttons = document.querySelectorAll("#calcu input[type='button']");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.value;

        if (value === "c") {
          result.value = ""; // Clear the display
        } else if (value === "=") {
          try {
            result.value = eval(result.value); // Evaluate the expression
          } catch {
            result.value = "Error"; // Handle invalid input
          }
        } else {
          result.value += value; // Append button value to the display
        }
      });
    });
  }

  // Initialize the function to display values
  displayValues();
});

// some explainations

// 1. try...catch?

// try...catch is a way to handle errors in your code without breaking your program. It helps you "try" a piece of code and "catch" any errors that happen so your program doesn't crash.

// 2. The eval()

// The eval() function in JavaScript is used to evaluate a string as if it were actual JavaScript code. It "executes" the code you pass to it.

// Example
const expression = "2 + 3 * 4"; // This is a string
const result = eval(expression); // eval will calculate it
console.log(result); // Output: 14

// Why Use eval() in a Calculator?

// In a calculator, you want to evaluate mathematical expressions entered by the user. Instead of writing complex code to parse and calculate the expression, you can simply pass the expression to eval() and let it handle everything.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// old code ///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// your logic here
// document.addEventListener("DOMContentLoaded", () => {
//     /*const table = document.getElementById("calcu")*/

//     function displayValues() {
//         const buttons = document.querySelectorAll("#calcu input[type='button']");
//         const result = document.getElementById("result");
//         buttons.forEach((button) => {
//             button.addEventListener("click", () => {
//                 const value = button.value;

//                 if (value ==="c"){
//                     result.value = "";
//                 } else{
//                     result.value += value;
//                 }
//             })
//         })
//     }

//     function performOperations() {
//         const buttons = document.getElementsByClassName("operations");
//         buttons.forEach((button) => {
//             button.addEventListener("click", () => {
//                 const value = button.value;

//                     if (value === "+"){
//                         result.value = value + value;
//                     } else if(value === "-"){
//                         result.value = value - value;
//                     } else if(value === "*"){
//                       result.value = value * value;
//                     } else if(value === "/"){
//                         result.value = value / value;
//                     } else if(value === "-"){
//                         result.value = value - value;
//                     }
//                 }
//             })
//         })

//     }

//     displayValues();
//     //performOperations();
// })
