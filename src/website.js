import { connected } from "process"
import './style.css';

const content = document.getElementById('content')

function buildHeader() {
    const header = document.createElement('div')
    header.setAttribute('id', 'header')

    const title = document.createElement('h4')
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
    // home.onclick = displayhome();

    const menu = document.createElement('button')
    menu.classList = "nav-button"
    menu.setAttribute('id', 'menu-tab')
    menu.innerText = "menu"
    nav.appendChild(menu)
    // menu.onclick = displayMenu();

    const about = document.createElement('button')
    about.classList = "nav-button"
    about.setAttribute('id', 'about')
    about.innerText = "about"
    nav.appendChild(about)
    // about.onclick = displayAbout();

    return nav;
}

function buildFooter() {
    const footer = document.createElement('div')
    footer.setAttribute('id', 'footer')

    const attribution = document.createElement('p')
    attribution.setAttribute('id', 'attribute')
    footer.appendChild(attribution)

    return footer;
}

// function displayHome() {

// }

// function displayMenu() {

// }

// function displayAbout() {

// }

function initializeContent() {
    const content = document.getElementById('content');

    content.appendChild(buildHeader());
    content.appendChild(buildFooter());

    return content;
}

export default initializeContent;
