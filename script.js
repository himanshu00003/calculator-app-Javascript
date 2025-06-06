let expression = ""; // Store the math expression as a string

const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

// Add numbers and dot to the expression
function appendValue(value) {
  expression += value;
  display.value = expression;
}

// Add operators like +, -, *, /
function appendOperator(op) {
  const lastChar = expression.slice(-1); // Check the last character
  const operators = "+-*/";

  // Replace the last operator if user presses multiple in a row
  if (operators.includes(lastChar)) {
    expression = expression.slice(0, -1);
  }

  expression += op;
  display.value = expression;
}

// Clear the input and expression
function clearDisplay() {
  expression = "";
  display.value = "";
}

// Delete the last character
function deleteLast() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

// Evaluate the expression when "=" is clicked
function calculate() {
  try {
    const result = eval(expression); // Calculate result

    if (result !== undefined) {
      addToHistory(expression + " = " + result); // Add to history
      expression = result.toString(); // Save result for next operations
      display.value = result;
    }
  } catch (error) {
    display.value = "Error"; // Show error if expression is wrong
    expression = "";
  }
}

// Show previous calculations
function addToHistory(entry) {
  const li = document.createElement("li"); // Create new list item
  li.innerText = entry;
  historyList.prepend(li); // Add to top of history list
}

// Copy the result to clipboard
function copyResult() {
  navigator.clipboard.writeText(display.value);
}

// Allow keyboard input
document.addEventListener("keydown", (e) => {
  const key = e.key;

  // If user types number or operator
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  }
  // Press Enter to calculate
  else if (key === "Enter") {
    calculate();
  }
  // Press Backspace to delete
  else if (key === "Backspace") {
    deleteLast();
  }
  // Press Escape to clear
  else if (key === "Escape") {
    clearDisplay();
  }
});
