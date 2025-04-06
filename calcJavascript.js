



//functions to be used for calculations


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





//variables for calculations


let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayContent = 0;





//operate function that calls specific calculation function based on operator


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






//variables to be used for buttons in the DOM


const numButtons = document.querySelectorAll(".number");
const displayValue = document.querySelector("#display");
const opButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equals")
const clearButton = document.querySelector("#clear")





//logic for when number buttons are clicked


numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber !== "" && operator === "") {
            firstNumber = "";
            displayContent = (displayValue.textContent = button.textContent);
        }
        else if (displayValue.textContent === "Overflow" || displayValue.textContent === "Just Stop") {
            "";
        }        
        else if (operator === "" && firstNumber === "") {
            if (displayValue.textContent == 0 && !displayValue.textContent.includes(".")) {
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
        }
        else if (firstNumber !== "") {
            if (displayContent == 0 && !secondNumber.includes(".")) {
                displayContent = (displayValue.textContent = button.textContent);
                secondNumber = displayContent;
            }
            else if (displayContent.length === 9) {
                ""
            }
            else if (button.textContent == ".") {
                if (displayContent === "") {
                    displayContent = (displayValue.textContent = button.textContent);
                    secondNumber = displayContent;
                }
                else if (displayValue.textContent.includes(".")) {
                    ""
                }
                else {
                    displayContent = (displayValue.textContent += button.textContent);
                    secondNumber = displayContent;
                };
            }
            else {
            displayContent += button.textContent;
            secondNumber = displayContent;
            displayValue.textContent = secondNumber;
            }
        }
    });
});





//logic for when operator buttons are clicked


opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "" && firstNumber === "") {
            firstNumber = displayContent;
            displayContent = 0;
            operator = button.textContent;
            button.style.cssText = "opacity: .5";
        }
        else if (operator !== "") {
            operator = button.textContent;
            opButtons.forEach((button) => {
                button.style.cssText = "opacity: none"
            })
            button.style.cssText = "opacity: .5";
        }
        else if (operator === "" && firstNumber !== "") {
            displayContent = 0;
            operator = button.textContent;
            button.style.cssText = "opacity: 0.5";
        };
    });
});






//logic for when the equal button is clicked


equalButton.addEventListener("click", () => {
    if (operator == "/" && secondNumber === "0") {
        displayValue.textContent = "Just Stop"
        firstNumber = "";
        secondNumber = "";
        operator = "";
        displayContent = 0;
        opButtons.forEach((button) => {
            button.style.cssText = "opacity: none"
        })
    }

    else if (firstNumber === "" || secondNumber === "" || operator === "") {
        "";
    }
    
    else {
        firstNumber = operate(operator);

        if (firstNumber % 1 !== 0) {
            firstNumber = firstNumber.toFixed(2);
        }
        
        lengthCheck = firstNumber.toString();

        if (lengthCheck.length <= 9) {
            displayValue.textContent = firstNumber;
            displayContent = 0;
            secondNumber = "";
            operator = "";
            opButtons.forEach((button) => {
                button.style.cssText = "opacity: none"
            })
        }   

        else if (lengthCheck.length > 9) {
            displayValue.textContent = "Overflow"
            firstNumber = "";
            secondNumber = "";
            operator = "";
            displayContent = 0;
            opButtons.forEach((button) => {
                button.style.cssText = "opacity: none"
            })
        }
    };
})





//logic for when the clear button is clicked

clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    displayContent = 0;
    operator = "";
    displayValue.textContent = 0;
    opButtons.forEach((button) => {
        button.style.cssText = "opacity: none"
    })
});

