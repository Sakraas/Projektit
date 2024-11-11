document.addEventListener("DOMContentLoaded", () => {
    
    const naytto = document.getElementById("tulos");
    const nappaimet = document.querySelectorAll("button");

    let nykyinenOperaattori = "";
    let edellinenOperaattori = "";
    let operaattori = null;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.hasAttribute(data-numero)) {
                appendNumber(button.getAttribute("data-number"));
            }
            else if (button.hasAttribute("data-operaattori")) {
                chooseOperator(button.getAttribute("data-operaattori"));
            }
            else if (button.id === "yhtSuuri") {
                compute();
            }
            else if (button.id === "reset") {
                clear();
            }
            updateDisplay();
        })
    })

    function appendNumber(numero) {
        if (numero === "0" && nykyinenOperaattori === "0") return;
        nykyinenOperaattori = nykyinenOperaattori.toString() + numero.toString();
    }
    function chooseOperator(selectedOperator) {
        if (currentOperand === "") return;
        if (previousOperand !== "") {
            compute();
        }
        operaattori = selectedOperator;
        previousOperand = currentOperand;
        currentOperand = "";
    }
    function compute() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (operaattori) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            default:
                return;
        }
        nykyinenOperaattori = computation;
        operaattori = null;
        edellinenOperaattori = "";
    }
        
    function clear() {
        nykyinenOperaattori = "";
        edellinenOperaattori = "";
        operaattori = null;
    }
    function updateDisplay() {
        display.textContent = nykyinenOperaattori || "0";
    }

    clear();

})