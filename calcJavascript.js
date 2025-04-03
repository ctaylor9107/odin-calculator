function addition (number1, number2) {
    return number1 + number2
};

function subtraction (number1, number2) {
    return number1 - number2
};

function multiplication (number1, number2) {
    return number1 * number2
};

function division (number1, number2) {
    return number1/number2
}

let firstNumber = "";
let secondNumber = "";
let operator = "";

let displayContent = 0;

function operate (operation) {
    if (operation === "+") {
        return addition (firstNumber, secondNumber)
    }
    else if (operation === "-") {
        return subtraction (firstNumber, secondNumber)
    }
    else if (operation === "*") {
        return multiplication (firstNumber, secondNumber)
    }
    else if (operation === "/") {
        return division (firstNumber, secondNumber)
    };
};

const numButtons = document.querySelectorAll(".number");
const displayValue = document.querySelector("#display");

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.textContent);
        displayValue.textContent = button.textContent;  
    });

});


console.log(division(16,5));