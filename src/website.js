import { connected } from "process"
import { container } from "webpack";
import './style.css';
import displayHome from './home';
import displayMenu from './menu';
import displayAbout from './about';

const content = document.getElementById('content')

function buildHeader() {
    const header = document.createElement('div')
    header.setAttribute('id', 'header')

    const title = document.createElement('div')
    title.setAttribute('id', 'title')
    title.innerText = "Sushi Restaurant"
    header.appendChild(title)

    header.appendChild(buildNav());

    return header;
}

function buildNav() {
    const nav = document.createElement('div')
    nav.setAttribute('id', 'nav')

    // Navigation Buttons
    const home = document.createElement('button')
    home.classList = "nav-button"
    home.setAttribute('id', 'home-tab')
    home.innerText = "Home"
    nav.appendChild(home)
    window.onload = home.style.backgroundColor = "#ee2a00"

    const menu = document.createElement('button')
    menu.classList = "nav-button"
    menu.setAttribute('id', 'menu-tab')
    menu.innerText = "menu"
    nav.appendChild(menu)

    const about = document.createElement('button')
    about.classList = "nav-button"
    about.setAttribute('id', 'about-tab')
    about.innerText = "about"
    nav.appendChild(about)

    return nav;
}

function buildFooter() {
    const footer = document.createElement('div')
    footer.setAttribute('id', 'footer')

    const attribution = document.createElement('div')
    attribution.setAttribute('id', 'attribute')

    const link = document.createElement('a')
    link.setAttribute('href', "https://github.com/NeptuneRjo")
    link.innerHTML = "Created by NeptuneRjo" 
    link.title = "Link to github profile"

    attribution.appendChild(link)
    footer.appendChild(attribution)

    return footer;
}

function buildContainer() {
    const container = document.createElement('div')
    container.setAttribute('id', "container")
    
    window.onload = container.appendChild(displayHome())

    return container;
}

function events() {
    const buttons = document.querySelectorAll('.nav-button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            updateNav(event.target);
            updateDisplay(event.target);
        })
    }
}

function updateNav(buttonClicked) {
    const buttons = document.querySelectorAll('.nav-button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#0b1013"
    }

    buttonClicked.style.backgroundColor = "#ee2a00"

}

function updateDisplay(toDisplay) {
    if (toDisplay.id == 'home-tab') {
        displayContent(displayHome())
    }
    else if (toDisplay.id == 'menu-tab') {
        displayContent(displayMenu())
    }
    else if (toDisplay.id == 'about-tab') {
        displayContent(displayAbout()) 
    }
}

function displayContent(navTarget) {
    const container = document.getElementById('container')
    container.innerHTML = ""

    container.appendChild(navTarget);
}

function initializeContent() {
    const content = document.getElementById('content');

    content.appendChild(buildHeader());
    content.appendChild(buildContainer());
    content.appendChild(buildFooter());

    events();

    return content;
}

export default initializeContent;
