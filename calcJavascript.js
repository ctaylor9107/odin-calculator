



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
        return addition (parseFloat(firstNumber), parseFloat(secondNumber))
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
const opButtons = document.querySelectorAll(".operator");










numButtons.forEach((button) => {
    button.addEventListener("click", () => {
            //console.log(button.textContent);
        if (operator === "" && firstNumber === "") {
            if (displayValue.textContent == 0) {
                displayContent = (displayValue.textContent = button.textContent);
            }
            else if (displayValue.textContent.length === 9) {
                ""
            }
            else if (button.textContent == ".") {
                if (displayValue.textContent.includes(".")) {
                    ""
                }
                else {
                    displayContent = (displayValue.textContent += button.textContent);
                };
            }
            else {
            displayContent = (displayValue.textContent += button.textContent);
            }
            console.log(displayContent);
        }
        else if (firstNumber !== "") {
            if (displayContent.length === 9) {
                ""
            }
            else if (button.textContent == ".") {
                if (displayContent === "") {
                    displayContent = (displayValue.textContent = button.textContent);
                }
                else if (displayValue.textContent.includes(".")) {
                    ""
                }
                else {
                    displayContent = (displayValue.textContent += button.textContent);
                };
            // displayValue.textContent = displayContent;
            }
            else {
            displayContent += button.textContent;
            secondNumber = displayContent
            displayValue.textContent = secondNumber;
            console.log(secondNumber);
            }
        }
    });
});














opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "" && firstNumber === "") {
            firstNumber = displayContent;
            displayContent = "";
            operator = button.textContent;
            console.log(operator);
            console.log(firstNumber);
        }
        else if (operator !== "") {
            operator = button.textContent;
            console.log(operator)
        }
        else if (operator === "" && firstNumber !== "") {
            displayContent = "";
            operator = button.textContent;
            console.log(operator);
            console.log(firstNumber);
        };
    });
});















const equalButton = document.querySelector("#equals")







equalButton.addEventListener("click", () => {
    if (operator == "/" && secondNumber === "0") {
        displayValue.textContent = "Just Stop"
        firstNumber = "";
        secondnumber = "";
        operator = "";
        displayContent = 0;
    }
    
    else {
        firstNumber = operate(operator);

        if (firstNumber % 1 !== 0) {
            firstNumber = firstNumber.toFixed(2);
        }
        
        lengthCheck = firstNumber.toString();

        if (lengthCheck.length <= 9) {
            displayValue.textContent = firstNumber;
            displayContent = "";
            secondNumber = "";
            operator = "";
        }

        else if (lengthCheck.length > 9) {
            displayValue.textContent = "Overflow"
            firstNumber = "";
            secondNumber = "";
            operator = "";
            displayContent = 0;
        }
    };
});


