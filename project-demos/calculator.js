var calcBody = document.createElement("div");
calcBody.id = "calculator";
document.body.appendChild(calcBody);

var topRow = document.createElement("div");
topRow.className = "top";
calcBody.appendChild(topRow);

var inputScreen = document.createElement("div");
inputScreen.className = "screen";
topRow.appendChild(inputScreen);

var newKeyDiv = document.createElement("div");
newKeyDiv.className = "keys";
calcBody.appendChild(newKeyDiv);

var clearBtn = document.createElement("span");
clearBtn.className = "clear";
clearBtn.innerText = "C";
topRow.appendChild(clearBtn);

numberKeys = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "/", 0, ".", "=", "*"];

for (var i = 0; i < numberKeys.length; i++) {
	var newSpan = document.createElement("span");
		if (i === 3 || i === 7 || i ===  11 || i === 15) {
			newSpan.className = "operator";
		} 
		else if (i === 14) {
			newSpan.className = "eval";
		} 
		else {
			newSpan.innerText = numberKeys[i];
			document.getElementsByClassName("keys")[0].appendChild(newSpan);
		}
		newSpan.innerText = numberKeys[i];
		document.getElementsByClassName("keys")[0].appendChild(newSpan);
};

// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		// Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
		
		// indexOf works only in IE9+
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it
		else {
			input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}

/*var div_calc = document.createElement("div");
div_calc.class = "calculator";
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
    div_element.className = "calculator2";
    div_calc.appendChild(div_element);
}

var button = document.getElementsByClassName("calculator2");
	button.addEventListener('click', btnPushed);
	calculator.appendChild(button);

var div_soln = document.createElement("div");
div_soln.id = "solution_bar";
div_calc.appendChild(div_soln);*/