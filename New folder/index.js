function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  function deleteResult() {
    document.getElementById('result').value = result.value.toString().slice(0,-1)
  }
  function calculatePercentage(value) {
    document.getElementById('result').value += value;
}

function togglePageContent() {
  var pageContent = document.getElementById("pageContent");
  pageContent.classList.toggle("hidden");
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

 
  
  
  function calculateResult() {
    var result = document.getElementById('result').value;
    try {
      var answer = eval(result);
      document.getElementById('result').value = answer;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }













