const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButtons = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
    "[data-previous-operand]"
);
const correntOperandTextElement = document.querySelector(
    "[data-current-operand]"
);

class Calculator {
    constructor(previousOperandTextElement, correntOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.correntOperandTextElement = correntOperandTextElement;
        this.clear();

    }

    appendNumber (number) {
        this.currentOperand = `${this.currentOperand}${number.toString()}`;
    }

    clear () {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    updateDisplay() {
        this.previousOperandTextElement.innerText = this.previousOperand;
        this.correntOperandTextElement.innerText = this.correntOperand;
    }
}

const calculator = new Calculator (
    previousOperandTextElement,
    correntOperandTextElement
);

for (const numberButton of numberButtons) {
    numberButtons.addEventListener("click", () => {
        calculator.appenNumber(numberButton.innerText);
        calculator.updateDisplay();
    })
}

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
} );

