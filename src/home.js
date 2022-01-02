import * as url from './hero-image.jpg'


function heroImages() {
    const hero = document.createElement('img');
    hero.src = url.default
}

function quickDescription() {
    const description = document.createElement('p')
    description.setAttribute('id', "home-description")
    description.innerText = "viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida" 
}

function storeHours() {
    const hours = document.createElement('div')
    hours.setAttribute('id', "hours")

    const mon = document.createElement('p')
    mon.classList = "hours"
    mon.innerText = "Monday 12pm - 10pm"
    hours.appendChild(mon)

    const tue = document.createElement('p')
    tue.classList = "hours"
    tue.innerText = "Tuesday 12pm - 10pm"
    hours.appendChild(tue)

    const wed = document.createElement('p')
    wed.classList = "hours"
    wed.innerText = "Wednesday12pm - 10pm"
    hours.appendChild(wed)

    const thur = document.createElement('p')
    thur.classList = "hours"
    thur.innerText = "Thursday 12pm - 10pm"
    hours.appendChild(thur)

    const fri = document.createElement('p')
    fri.classList = "hours"
    fri.innerText = "Friday 12pm - 10pm"
    hours.appendChild(fri)

    const weekend = document.createElement('p')
    weekend.classList = "hours"
    weekend.innerText = "Weekends 10am - 10:30pm"
    hours.appendChild(weekend)
}

function displayHome() {

}