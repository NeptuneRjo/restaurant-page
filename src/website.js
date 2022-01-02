import { connected } from "process"
import './style.css';

const content = document.getElementById('content')

function buildHeader() {
    const header = document.createElement('div')
    header.setAttribute('id', 'header')

    const title = document.createElement('h4')
    title.setAttribute('id', 'title')
    header.appendChild(title)

    const nav = document.createElement('div')
    nav.setAttribute('id', 'nav')
    header.appendChild(nav)


    // Navigation Buttons
    const home = document.createElement('button')
    home.classList('nav-button')
    home.setAttribute('id', 'home-tab')
    nav.appendChild(home)

    const menu = document.createElement('button')
    menu.classList('nav-button')
    menu.setAttribute('id', 'menu-tab')
    nav.appendChild(menu)

    const about = document.createElement('button')
    about.classList('nav-button')
    about.setAttribute('id', 'about')
    nav.appendChild(about)

    return header;
}

function buildFooter() {
    const footer = document.createElement('div')
    footer.setAttribute('id', 'footer')

    const attribution = document.createElement('p')
    attribution.setAttribute('id', 'attribute')
}