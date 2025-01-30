
const elements =  document.querySelectorAll(".col-calculette-1 .line-calculette > *");
    const screen = elements[0];
    const cancel = elements[1];
    const del = elements[2];
export const CalculetteObject = {

    initEvent: (touches) => {
        cancel.addEventListener("click", CalculetteObject.initCancel); 
        del.addEventListener("click", CalculetteObject.initDelete);       
         if (touches.length) {
            touches.forEach(touche => {
                touche.addEventListener("click", () => {
                    const value = touche.innerText;

                    screen.value += value;

                    console.log(value);
                    
                });
            });
         }
    },
    initCancel: () => {
        screen.value = "";
    },
    initDelete: () => {
        screen.value = screen.value.slice(0, -1);
    },
}
