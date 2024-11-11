document.addEventListener("DOMContentLoaded", () => {
    
    const display = document.getElementById("tulos");
    const buttons = document.querySelectorAll("button");

    let nykyinenOperaattori = "";
    let edellinenOperaattori = "";
    let operaattori = null;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.hasAttribute("data-number")) {
                appendNumber(button.getAttribute("data-number"));
            }
            else if (button.hasAttribute("data-operator")) {
                chooseOperator(button.getAttribute("data-operator"));
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
    function chooseOperator(valittuOperaattori) {
        if (nykyinenOperaattori === "") return;
        if (edellinenOperaattori !== "") {
            compute();
        }
        operaattori = valittuOperaattori;
        edellinenOperaattori = nykyinenOperaattori;
        nykyinenOperaattori = "";
    }
    function compute() {
        let computation;
        const prev = parseFloat(edellinenOperaattori);
        const current = parseFloat(nykyinenOperaattori);
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