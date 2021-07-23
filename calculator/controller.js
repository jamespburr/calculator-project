// setup variables and get a calculator instance

var calculator

function CreateCalculator() {
    calculator = new Calculator();
    calculator.firstNumber = parseInt(document.getElementById("inputNumberOne").value);
    calculator.secondNumber = parseInt(document.getElementById("inputNumberTwo").value);
    
}

// perform a calculation when the operator button is clicked
function calculate() {
    CreateCalculator();
    calculator.operator = getOperator();
    let result = calculator.operate();
    updateResultText(calculator.value);
}


/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
    let label = document.getElementById("result")
    label.style = "color:black"
    if (!calculator.attemptedDivideByZero) {
    label.innerHTML = "The result of " + calculator.getAction() + " " + calculator.firstNumber + " and " + calculator.secondNumber + " is " + value
    }
    else{
        label.innerHTML = "You cannot divide by 0"
        label.style = "color:red"
    }
}

// should clear input text values and focus the first number input
function clearValues() {
    document.getElementById("inputNumberOne").value = null;
    document.getElementById("inputNumberOne").focus();
    document.getElementById("inputNumberTwo").value = null;
    let radioButtons = document.getElementsByName("operation");
    for (let i = 0; i < radioButtons.length; i++){
        radioButtons[i].checked = false;
    }
}


/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    let radioButtons = document.getElementsByName("operation")
    let operator = "";
    for (let i = 0; i < radioButtons.length; i++){
        if (radioButtons[i].checked){
            operator = radioButtons[i].value;
        }
       
    }
    return operator;
}
