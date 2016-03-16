var array = [];
var operator = "";
var total = 0;
num1Array = [];
num2Array = [];
num1= 0;
num2 = 0;
newTotal = "";

function setNum(x) {
  array.push(x);
}

function pickOperator(x) {
  if(x=="+") {
    operator = "add";
  } else if(x=="-"){
  operator = "subtract";
  } else if(x=="*") {
    operator = "multiply";
  } else {
    operator = "divide";
  }
  num1Array.push(array.join(""));
  array = [];
}

function clear() {
  total = 0;
  num1Array = [];
  num2Array = [];
  num1= 0;
  num2 = 0;
  operator = "";
  array = 0;
  newTotal = "";
}

function execute() {
  num2Array.push(array.join(""));
  num1 = parseInt(num1Array.pop());
  num2 = parseInt(num2Array.pop());
  if(operator == 'add') {
    total = num1 + num2;
  } else if(operator == 'subtract') {
    total = num1 - num2;
  } else if(operator == 'multiply') {
    total = num1 * num2;
  } else {
    total = num1 / num2;
  }
  num1Array = []
  num2Array = [];
  array = [];
  operator = "";
  newTotal = total.toString();
  array.push(newTotal);
  document.getElementById("mytext").value = total;
  total = 0;
}
