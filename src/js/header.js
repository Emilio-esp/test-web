import { getElementDOM, assingOnEventDOM } from "./utils";

const clickmenuToggle = () => {
    let menu = getElementDOM('#menu-toggle');
    let navEl = getElementDOM('#menu');

    if (menu && navEl) {
        menu.addEventListener('click', () => {
            navEl.classList.toggle('menu-active')
            menu.classList.toggle('animate-menu')
        })
    }
}

window.addEventListener('scroll', ()=>{
    let scrollY = window.pageYOffset;

    changeColorBackgroundHeader( scrollY );
    menuActive(scrollY);

})

const menuActive = ( scrollY ) => {
    let sectionHome = getOffsetTop(['#home']);
    let sectionAbout = sectionHome + getOffsetTop('#about');
    let sectionServices = sectionAbout + getOffsetTop('#services');
    let sectionWork = sectionServices + getOffsetTop('#work');
    let sectionclients = sectionWork + getOffsetTop('#clients');
    let sectionContact = sectionclients + getOffsetTop('#contact');

    let navEl = getElementDOM('.nav__menu');

    (scrollY < sectionHome) ?
     navEl.children[0].classList.add('active') 
    : navEl.children[0].classList.remove('active');

    (scrollY < sectionAbout && scrollY > sectionHome) ?
     navEl.children[1].classList.add('active') 
    : navEl.children[1].classList.remove('active');

    (scrollY < sectionServices && scrollY > sectionAbout) ?
     navEl.children[2].classList.add('active') 
    : navEl.children[2].classList.remove('active');

    (scrollY < sectionWork && scrollY > sectionServices) ?
     navEl.children[3].classList.add('active') 
    : navEl.children[3].classList.remove('active');

    (scrollY < sectionclients && scrollY > sectionWork) ?
     navEl.children[4].classList.add('active') 
    : navEl.children[4].classList.remove('active');

    (scrollY < sectionContact && scrollY > sectionclients) ?
     navEl.children[5].classList.add('active') 
    : navEl.children[5].classList.remove('active');

}

const getOffsetTop = ( element ) => {
    let elDOM = getElementDOM(element);

    if (elDOM) {
        return elDOM.offsetHeight
    }

    return 0;

}

const changeColorBackgroundHeader = ( scrollY ) => {
    let main_menu = getElementDOM('.main-header');

    (scrollY> 200 && main_menu)
        ? main_menu.classList.add('menu-on-scroll')
        : main_menu.classList.remove('menu-on-scroll');
}

const assingEventName = () => {
    let elDOm = getElementDOM('#header_home');
    
    assingOnEventDOM(elDOm, 'click' , ()=>{
        window.location.replace(window.location.origin+"#")
    })
}

export {
    clickmenuToggle,
    assingEventName
}