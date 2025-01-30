

export const CalculetteObject = {

    initEvent: (screen, touches, cancel,del) => {
        cancel.addEventListener("click", () => CalculetteObject.initCancel(screen)); 
        del.addEventListener("click", () => CalculetteObject.initDelete(screen)); 
            
        
        if (touches.length) {
            touches.forEach(touche => {
                touche.addEventListener("click", () => {
                    const value = touche.innerText;
                    screen.value += value;
                    console.log(value);
                })
            });
        }
    },
    initCancel: (screen) => {
        screen.value = "";
    },
    initDelete: (screen) => {
        screen.value = screen.value.substring(0, screen.value.length - 1);
        }

}