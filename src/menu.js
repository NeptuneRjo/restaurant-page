function buildHeading() {
    const header = document.createElement('div')
    header.setAttribute('id', 'menu-header')
    header.innerText = "Sushi Menu"

    return header;
}

function MenuItem(image, name, desc, price) {
    const item = document.createElement('div')
    item.classList = "menu-item"

    const imageContainer = document.createElement('div')
    imageContainer.classList = "image-container"
    
    const menuImage = new Image()
    menuImage.src = image;
    menuImage.classList = "menu-image"
    item.appendChild(menuImage)

    const itemName = document.createElement('div')
    itemName.classList = "menu-text"
    itemName.setAttribute('id', 'menu-item-name')
    itemName.innerText = name;
    item.appendChild(itemName)

    const description = document.createElement('div')
    description.classList = "menu-text"
    description.setAttribute('id', 'menu-description')
    description.innerText = desc;
    item.appendChild(description)

    const itemPrice = document.createElement('div')
    itemPrice.classList = "menu-text"
    itemPrice.setAttribute('id', 'menu-price')
    itemPrice.innerText = price;
    item.appendChild(itemPrice)

    return item;
}

function displayMenu() {
    const menu = document.createElement('div')
    menu.setAttribute('id', 'menu')

    menu.appendChild(buildHeading())
    menu.appendChild(itemOne)
    menu.appendChild(itemTwo)
    menu.appendChild(itemThree)
    menu.appendChild(itemFour)

    return menu;
}

let itemOne = new MenuItem(
    "./itemOne.jpg", 
    "tortor vitae purus faucibus",
    "iaculis nunc sed augue lacus viverra vitae congue eu consequat",
    "$12.99"
);

let itemTwo = new MenuItem(
    "./itemTwo.jpg",
    "suscipit adipiscing bibendum",
    "at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et",
    "$6.99"
);

let itemThree = new MenuItem(
    "./itemThree.jpg",
    "aliquam sem et tortor",
    "commodo odio aenean sed adipiscing diam donec",
    "$6.99"
);

let itemFour = new MenuItem(
    "./itemFour.jpg",
    "netus et malesuada fames ac",
    "metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus",
    "$21.99"
)

export default displayMenu;
