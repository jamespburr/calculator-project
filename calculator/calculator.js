class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;

    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }

    // determine the current operation's label
    getAction() {
        return this.operator
    }

    // performa a calculation based on the currently selected operation
    operate() {
        
        if(this.operator === "adding"){
            return this.add()
        } else if (this.operator === "subtracting") {
            return this.subtract()
         
        } else if (this.operator === "multiplying"){
            return this.multiply()
        }else if (this.operator === "dividing") {
            if (this.secondNumber === 0) {
                this.attemptedDivideByZero = true              
            }
            return this.divide()
        }
    }

    attemptedDivideByZero = false;

    // perform addition operation
    add() {
        let result = this.firstNumber + this.secondNumber
        return result
    }
    // perform subtraction operation
    subtract() {
        let result = this.firstNumber - this.secondNumber
        return result
    }

    // perform multiplication operation
    multiply() {
        let result = this.firstNumber * this.secondNumber
        return result
    }

    // perform divide operation
    divide() {
        let result = ""
        if (!this.attemptedDivideByZero){
            result = this.firstNumber / this.secondNumber
        }
        return result
    }
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;
