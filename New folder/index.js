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
  
  function calculateResult() {
    var result = document.getElementById('result').value;
    try {
      var answer = eval(result);
      document.getElementById('result').value = answer;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  