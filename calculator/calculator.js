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
        let Action = ""
        switch(this.operator){
            case "add": 
                action = "adding"
            case "subtract":
                action = "subtracting"
            case "multiply":
                action = "multiplying"
            case "divide":
                action = "dividing"
        }
        return action
    }

    // performa a calculation based on the currently selected operation
    operate() {
        
        if(this.operator === "add"){
            return this.add()
        } else if (this.operator === "subtract") {
            return this.subtract()
         
        } else if (this.operator === "multiply"){
            return this.multiply()
        }else if (this.operator === "divide") {
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
