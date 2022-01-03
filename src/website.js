import { connected } from "process"
import { container } from "webpack";
import './style.css';
import displayHome from './home';
import displayMenu from './menu';

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

    // home.onclick = displayhome();

    const menu = document.createElement('button')
    menu.classList = "nav-button"
    menu.setAttribute('id', 'menu-tab')
    menu.innerText = "menu"
    nav.appendChild(menu)
    // menu.onclick = displayMenu();

    const about = document.createElement('button')
    about.classList = "nav-button"
    about.setAttribute('id', 'about-tab')
    about.innerText = "about"
    nav.appendChild(about)
    // about.onclick = displayAbout();

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
    const home = document.getElementById('home-tab')
    const menu = document.getElementById('menu-tab')
    const about = document.getElementById('about-tab')
    const container = document.getElementById('container')


    home.addEventListener('click', function() {
        displayContent(displayHome())
        event.target.style.backgroundColor = "#ee2a00"      
        about.style.backgroundColor = "#0b1013"
        menu.style.backgroundColor = "#0b1013"  
    })
    about.addEventListener('click', function() {
        event.target.style.backgroundColor = "#ee2a00"
        home.style.backgroundColor = "#0b1013"
        menu.style.backgroundColor = "#0b1013"
        // container.appendChild(displayAbout())
    })
    menu.addEventListener('click', function() {
        displayContent(displayMenu())
        event.target.style.backgroundColor = "#ee2a00"
        home.style.backgroundColor = "#0b1013"
        about.style.backgroundColor = "#0b1013"
        // container.appendChild(displayMenu())
    })
}

function displayContent(navTarget) {
    const container = document.getElementById('container')
    container.innerHTML = ""

    container.appendChild(navTarget);
}

// import from modules


// function displayMenu() {

// }

// function displayAbout() {

// }

function initializeContent() {
    const content = document.getElementById('content');

    content.appendChild(buildHeader());
    content.appendChild(buildContainer());
    content.appendChild(buildFooter());

    events();

    return content;
}

export default initializeContent;
