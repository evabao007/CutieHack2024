let display = document.getElementById("display");
let currentInput = '';
let result = 0;

function appendToDisplay(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function calculateResult() {
    try {
        let expression = currentInput;

        console.log("Original Input: ", expression);

        // Handle complex operations like sin, cos, etc.
        expression = expression.replace(/log/g, 'Math.log10'); // Replace log with Math.log10
        expression = expression.replace(/sin/g, 'Math.sin');   // Replace sin with Math.sin
        expression = expression.replace(/cos/g, 'Math.cos');   // Replace cos with Math.cos
        expression = expression.replace(/tan/g, 'Math.tan');   // Replace tan with Math.tan
        expression = expression.replace(/sec/g, '1/Math.cos'); // Replace sec with 1/Math.cos
        expression = expression.replace(/csc/g, '1/Math.sin'); // Replace csc with 1/Math.sin
        expression = expression.replace(/cot/g, '1/Math.tan'); // Replace cot with 1/Math.tan

	expression = expression.replace(/(\d+)\^(\d+)/g, 'Math.pow($1, $2)');

        expression = expression.replace(/(\d+(\.\d*)?)\^(\d+(\.\d*)?)/g, 'Math.pow($1, $3)');

	expression = expression.replace(/\bln\(([^)]+)\)/g, 'Math.log($1)'); // Handle ln(x) -> Math.log(x)

	console.log('Transformed Expression:', expression);


        // Use eval to calculate the result of the expression
        result = eval(expression);

        // Display the result
	saveHistory(`${currentInput} = ${result}`);
        display.innerText = result;
        currentInput = result.toString();  // Store the result for further calculations
    } catch (error) {
	console.error('Error evaluating expression:', error); // Log error for debugging
        display.innerText = 'Error';
        currentInput = '';
    }
}

function saveHistory(entry) {
    let historyItem = document.createElement('li');
    historyItem.textContent = entry;
    historyItem.onclick = function() {
        display.innerText = entry.split('=')[0].trim();
        currentInput = display.innerText;
    };
    historyList.insertBefore(historyItem, historyList.firstChild);  // Insert at the top
}

function clearHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear all history items
}

