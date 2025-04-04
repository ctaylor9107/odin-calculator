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
                    displayConstent = (displayValue.textContent += button.textContent);
                };
            }
            else {
            displayContent = (displayValue.textContent += button.textContent);  
            }
            console.log(displayContent);
        }
        else if (operator !== "" && firstNumber !== "") {
            if (displayValue.textContent.length === 9) {
                ""
            }
            else if (button.textContent == ".") {
                if (displayValue.textContent.includes(".")) {
                    ""
                }
                else {
                    displayConstent = (displayValue.textContent += button.textContent);
                };
            }
            else {
            secondNumber += button.textContent;
            displayValue.textContent = secondNumber;
            console.log(secondNumber);
            }
        }
    });
});


opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            firstNumber = displayContent;
            displayContent = "";
            operator = button.textContent;
            console.log(operator);
            console.log(firstNumber);
        }
        else if (operator !== "") {
            operator = button.textContent;
            console.log(operator);
        }
    })
});


// const equalButton = document.querySelector("#equals")

// equalButton.addEventListener("click", () => {
//     console.log(displayNumber * 2);
// })

