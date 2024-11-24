const announcement = document.querySelector('.announcement-section');
const hero = document.querySelector('.hero');
const clients = document.querySelector('.clients-section');

function rearrangeSections(){
    if (window.innerWidth >= 680){
        hero.appendChild(announcement);
    }
    else{
        clients.insertAdjacentElement('afterend', announcement);
    }
}

const pictures_info = document.querySelector('.info-section__picture-div');
const containers = document.querySelector('.info-section__container-div');
const info = document.querySelector('.info-section__flex-div');
const info_div = document.querySelector('.info-section__info-div');

function rearrangeSectionsInfo() {
    if (window.innerWidth >= 768) {
        info.appendChild(pictures_info);
    } else {
        info_div.insertBefore(pictures_info, containers);
    }
}

window.addEventListener('load', () =>{
    rearrangeSections();
    rearrangeSectionsInfo();
});
window.addEventListener('resize', () =>{
    rearrangeSections();
    rearrangeSectionsInfo();
});