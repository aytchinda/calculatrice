import {CalculetteObject} from "./librairies/functions.js";

window.onload = () => {
    const elements  = document.querySelectorAll(".col-calculette-1 .line-calculette > *");
    const screen = elements[0];
    const cancel = elements[1];
    const del = elements[2];
    const touches = ([].slice.call(elements)).slice(3);
    
    CalculetteObject.initEvent(screen , touches, cancel,del);

}