// setup variables and get a calculator instance

var calculator

function CreateCalculator() {
    calculator = new Calculator();
    calculator.firstNumber = parseInt(document.getElementById("txtFirst").value);
    calculator.secondNumber = parseInt(document.getElementById("txtSecond").value);
    
}

// perform a calculation when the operator button is clicked
function calculate() {
    CreateCalculator();
    calculator.operator = getOperator();
    let result = calculator.operate();
    updateResultText(result);
}

//New Test
/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
    document.getElementById("lblResult").innerHTML = "The result of " + calculator.getAction() + " " + calculator.firstNumber + " and " + calculator.secondNumber + " is " + value
}

// should clear input text values and focus the first number input
function clearValues() {
    document.getElementById("txtFirst").value = null;
    document.getElementById("txtFirst").focus();
    document.getElementById("txtSecond").value = null;
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
