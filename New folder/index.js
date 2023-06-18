const result = document.getElementById('result') ;

function appendNumber(number) {
  result.value += number;
}


let memory = 0;

function addToMemory() {
  const resultInput = document.getElementById("result");
  const currentValue = parseFloat(resultInput.value) || 0;
  memory += currentValue;

  // Display the updated memory value
  resultInput.value = memory;
}

let memories = 0;

function subtractFromMemory() {
  const resultInput = document.getElementById("result");
  const currentValue = parseFloat(resultInput.value) || 0;
  memories -= currentValue;

  // Display the updated memory value
  resultInput.value = memories;
}

let recallMemory = 0;
function memoryRecall() {
  const resultInput = document.getElementById("result");
  resultInput.value = memory;
}

let clearMemory = 0;

function memoryClear() {
  clearMemory = 0;
  const resultInput = document.getElementById("result");
  resultInput.value = "";
}

// reciprocal function

function calculateReciprocal() {
  const resultInput = document.getElementById("result");
  const currentValue = parseFloat(resultInput.value) || 0;
  const reciprocal = 1 / currentValue;
  resultInput.value = reciprocal;
}
// percentage function

function calculatePercentage() {
  const resultInput = document.getElementById("result");
  const currentValue = parseFloat(resultInput.value) || 0;
  const percentage = currentValue / 100;
  resultInput.value = percentage;
}

function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}
function deleteResult() {
  document.getElementById("result").value = result.value
    .toString()
    .slice(0, -1);
}
function calculatePercentage(value) {
  document.getElementById("result").value += value;
}

function togglePageContent() {
  var pageContent = document.getElementById("content");
  pageContent.classList.toggle("hidden");
}

function pow() {
  result.value = Math.pow(result.value, 2);
}
function powOne() {
  result.value = Math.pow(result.value, 1);
}
function powCube() {
  result.value = Math.pow(result.value, 3);
}
function expPow() {
  result.value = Math.pow(result.value, prompt());
}


function log() {
  result.value = Math.log(result.value);
}
function e() {
  result.value *= 2.718281828459045;
}
function pi() {
  result.value *= 3.1415;
}
function sqrRoot() {
  document.getElementById("result").value = Math.sqrt(result.value);
}

function calculator() {
  // Function to convert radians to degrees
  function toDegrees(radians) {
    return (radians * 180) / Math.PI;
  }

  // Function to handle the calculation
  function calculate() {
    var inputValue = parseFloat(prompt("Enter the value in radians:"));

    if (!isNaN(inputValue)) {
      var result = toDegrees(inputValue);
      document.getElementById("result").value = result + " degrees";
    } else {
      alert("Invalid input");
    }
  }

  // Call the calculate function
  calculate();
}
// trignometry functions

function calculateSin() {
  document.getElementById("result").value = Math.sin(result.value).toFixed(4);
}
function calculateCos() {
  document.getElementById("result").value = Math.cos(result.value).toFixed(4);
}
function calculateTan() {
  document.getElementById("result").value = Math.tan(result.value).toFixed(4);
}
function calculateSinInverse() {
  document.getElementById("result").value = Math.asin(result.value).toFixed(4);
}
function calculateCosInverse() {
  document.getElementById("result").value = Math.acos(result.value).toFixed(4);
}
function calculateTanInverse() {
  document.getElementById("result").value = Math.atan(result.value).toFixed(4);
}
function calculateSinHyper() {
  document.getElementById("result").value = Math.sinh(result.value).toFixed(4);
}
function calculateCosHyper() {
  document.getElementById("result").value = Math.cosh(result.value).toFixed(4);
}
function calculateTanHyper() {
  document.getElementById("result").value = Math.tanh(result.value).toFixed(4);
}
// function calculateSqrRoot() {
//   document.getElementById("result").value =Math.SQRT1_2

// Function to perform Percentage
function calculatePercentage() {
  let result = document.getElementById("result").value;

  try {
    let answer = eval(result + "/100");
    document.getElementById("result").value = answer;
  } catch (error) {
    console.log("error : " + error);
    document.getElementById("result").value = "Error";
  }
}

// exp function






















function calculateResult() {
  var result = document.getElementById("result").value;
  try {
    var answer = eval(result);
    document.getElementById("result").value = answer;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
