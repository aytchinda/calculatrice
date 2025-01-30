const elements = document.querySelectorAll(".col-calculette-1 .line-calculette > *");
let operators = document.querySelectorAll(".col-calculette-2 .line-calculette > *");
const screen = elements[0];
const result = operators[0];
const equal = operators[operators.length - 1];
const cancel = elements[1];
const del = elements[2];

operators = [].slice.call(operators).slice(1, operators.length - 1);
let selectedOperator;
export const CalculetteObject = {

    initEvent: (touches) => {
        console.log(operators);

        cancel.addEventListener("click", CalculetteObject.initCancel);
        del.addEventListener("click", CalculetteObject.initDelete);
        equal.addEventListener("click", CalculetteObject.initEqual);

        if (touches.length) {
            touches.forEach(touche => {
                touche.addEventListener("click", () => {
                    const value = touche.innerText;

                    screen.value += value;
                    result.value = "";
                    selectedOperator = false;
                    console.log(value);

                });
            });
        }
        if (operators.length) {
            operators.forEach(operator => {
                operator.addEventListener("click", () => {
                    if (!selectedOperator) {
                        const value = operator.innerText;
                        screen.value += value;
                        console.log(value);

                        selectedOperator = true;
                    }
                });
            });
        }
    },
    initCancel: () => {
        screen.value = "";
        result.value = "";

    },
    initDelete: () => {
        if (screen.value.length > 0) {
            screen.value = screen.value.slice(0, -1);
            result.value = "";
            selectedOperator = false;

        }
    },
    initEqual: () => {
        if (!selectedOperator) {
            result.value = eval(screen.value);

        }
    },
}