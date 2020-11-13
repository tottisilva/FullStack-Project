var field1 = document.getElementById('field1');
var field2 = document.getElementById('field2');
var resultFied = document.getElementById('fesultField')
var form = document.getElementById(' XpercentOfY ');

// One way to do :
// var myCalFunction = function(){ }
//form.addEventListener('submit', myCalFunction);

form.addEventListener('submit', function (event) {
  if (!Field1.value || !Field2.value) {
    alert("Please enter the values in the fields");
  } else {
    var x = parseFloat(field1.value);
    var y = parseFloat(field2.value);
    var result = x / y;
    var percent = result * 100;
    resultFied.innerText = "Answer: " + percent + "%";
    event.preventDefault();
  }
});
