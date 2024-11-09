let menu = document.getElementById('menu-page');
let details = document.getElementById('details');

function displayMenu() {
    menu.classList.add('menu-screen');
}

function colorChange() {
    const background = document.querySelector('body');

    if (background.style.backgroundColor === 'white') {
        background.style.backgroundColor = 'black';
        everythingWhite();
    } else {
        background.style.backgroundColor = 'white';
        everythingBlack();
    }
    
}

function everythingWhite() {
    const everything = document.querySelectorAll('body');
    everything.forEach(element => {
        element.style.color = 'white'
    });
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.filter = 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7422%) hue-rotate(9deg) brightness(122%) contrast(93%)';
    });
    const buttons = document.querySelectorAll('.repo');
    buttons.forEach(button => {
        button.style.filter = 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7422%) hue-rotate(9deg) brightness(122%) contrast(93%)';
    });
}

function everythingBlack() {
    const everything = document.querySelectorAll('body');
    everything.forEach(element => {
        element.style.color = 'black';
    });
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.filter = 'brightness(0) saturate(100%) invert(0%) sepia(2%) saturate(0%) hue-rotate(163deg) brightness(107%) contrast(103%)';
    });
    const buttons = document.querySelectorAll('.repo');
    buttons.forEach(button => {
        button.style.filter = 'brightness(0) saturate(100%) invert(0%) sepia(2%) saturate(0%) hue-rotate(163deg) brightness(107%) contrast(103%)';
    });
}

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        target.classList.add('active');
    })
});