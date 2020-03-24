import { getElementDOM } from "./utils";

const mainAnimation = () => {
    let text = getElementDOM('.banner__content-subtitle2');
    let str = text.textContent.split("");
    text.textContent = "";

    for (let i = 0; i < str.length; i++) {
        text.innerHTML += `<span>${str[i]}</span>`;
    }

    let span = text.querySelectorAll('span');


    for (let i = 0; i < span.length; i++) {
        setTimeout(() => {
            span[i].classList.add('fade')
        }, 50*i);
        
    }
}

export{
    mainAnimation
}