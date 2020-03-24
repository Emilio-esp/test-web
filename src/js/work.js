import { getAllElementDOM, assingOnEventDOM } from "./utils";

const handleClickMenu = ( e ) => {
    let typeWork = e.target.dataset.work;
    
    setActiveSubmenu(typeWork)
    filterElementsWork(typeWork);
}

const filterElementsWork = (typeWork) => {
    let works = getAllElementDOM('.work__item-container');

    for (let i = 0; i < works.length; i++) {
        let typeData = works[i].dataset.type;

        (typeData === typeWork || typeWork === 'all')
        ? works[i].style.display = 'block'
        : works[i].style.display = "none";
    }
}

const setActiveSubmenu = (typeWork) => {
    let works = getAllElementDOM('.work__item');
    
    for (let i = 0; i < works.length; i++) {    
        let typeData = works[i].dataset.work;
        
        typeData === typeWork 
        ? works[i].classList.add('active')
        : works[i].classList.remove('active')
    }
}

const assingOnClick = () => {
    let liEl = getAllElementDOM('.work__item')

    for (let i = 0; i < liEl.length; i++) {
        assingOnEventDOM(liEl[i], 'click', handleClickMenu)
    }
}


export {
    assingOnClick
}