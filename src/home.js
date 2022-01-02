// import './hero-image.jpg'


function heroImages() {
    const heroContainer = document.createElement('div')
    heroContainer.setAttribute('id', 'hero-container')
    
    const img = new Image()
    img.src = "./46386875f6ed55795884.jpg"
    img.setAttribute('id', 'hero-image')
    heroContainer.appendChild(img)

    return heroContainer;
}

function quickDescription() {
    const description = document.createElement('p')
    description.setAttribute('id', "home-description")
    description.innerText = "viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida" 

    return description;
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
    wed.innerText = "Wednesday 12pm - 10pm"
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

    return hours;
}

function displayHome() {
    const home = document.createElement('div')
    home.setAttribute('id', 'home')

    home.appendChild(heroImages())
    home.appendChild(quickDescription())
    home.appendChild(storeHours())

    return home;
}

export default displayHome;