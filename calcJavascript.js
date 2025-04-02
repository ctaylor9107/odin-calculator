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

function operate (operation, number1, number2) {
    if (operation === "+") {
        return addition (number1, number2)
    }
    else if (operation === "-") {
        return subtraction (number1, number2)
    }
    else if (operation === "*") {
        return multiplication (number1, number2)
    }
    else if (operation === "/") {
        return division (number1, number2)
    };
};

let firstNumber = "";
let secondNumber = "";
let operator = "";

console.log(division(16,5));