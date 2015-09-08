var div_calc = document.createElement("div");
div_calc.id = "calculator";
document.body.appendChild(div_calc);

var header = document.createElement("h1");
header.innerText = "Calculate All The Things";
div_calc.appendChild(header);

array = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "="];

function printNumber(num) {
    console.log(num.target.value);
}

for (i = 0; i < array.length; i++) {
    var div_element = document.createElement("div");
    div_element.innerText = array[i];
    div_element.id = "calculator2";
    div_calc.appendChild(div_element);
    var button = document.getElementById("calculator2");
    
}

var div_soln = document.createElement("div");
div_soln.id = "solution_bar";
div_calc.appendChild(div_soln);


var button = document.getElementById("calculator2");
button.addEventListener('click', printNumber);