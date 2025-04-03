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


console.log(division(16,5));