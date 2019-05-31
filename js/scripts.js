
window.onload=function(){

var calctip1 = document.getElementById('calctip1');
var myBtn2 = document.getElementById('my-button2');
var tipElem = document.getElementById("tip");
var totalElem = document.getElementById("total");
var tiprate = document.getElementById("tiprate");

calctip1.addEventListener('click', calc);

myBtn2.addEventListener('click', calc2);




 
function calc(e) {

  e.preventDefault();

  var input = document.getElementById('bill');

  var inputTip = document.getElementById('tippercent');

  var bill = parseFloat(input.value); 

  var tippercent = parseFloat(inputTip.value);

  var tip = bill * (tippercent/100);

  var total = bill + tip; 

  tipElem.textContent = "$"+(tip).toFixed(2);

  totalElem.textContent = "$"+(total).toFixed(2); 

}

 
function calc2(e) {

  e.preventDefault();

  var input = document.getElementById('bill');

  var input2 = document.getElementById('tipamt');

  var bill = parseFloat(input.value);     

  var tip = parseFloat(input2.value);  

  var total = bill + tip; 

  totalElem.textContent = "$"+(total).toFixed(2);    

  var tippercent = parseFloat(tip/(bill)*100);

  tiprate.textContent = (tippercent).toFixed(2);

}
}