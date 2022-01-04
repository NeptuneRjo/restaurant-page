function buildHeading() {
    const header = document.createElement('div')
    header.setAttribute('id', 'about-header')
    header.innerText = "About Us"

    return header;
}

function buildStatement() {
    const statementContainer = document.createElement('div')
    statementContainer.setAttribute('id', 'statement-container')

    const statement = document.createElement('p')
    statement.setAttribute('id', 'mission-statement')
    statement.innerText = "enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu"

    statementContainer.appendChild(statement)

    return statementContainer;
}

function buildReview() {
    const reviewContainer = document.createElement('div')
    reviewContainer.setAttribute('id', 'review-container')

    const review = document.createElement('div');
    review.setAttribute('id', 'review')
    review.innerText = "\"sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus\""
    reviewContainer.appendChild(review)

    const reviewer = document.createElement('div')
    reviewer.setAttribute('id', 'reviewer')
    reviewer.innerText = "- NeptuneRjo"
    reviewContainer.appendChild(reviewer)

    return reviewContainer;
}

function buildContact() {
    const contactContainer = document.createElement('div')
    contactContainer.setAttribute('id', 'contact-container')

    const contacts = document.createElement('div')
    contacts.setAttribute('id', 'contacts')
    contacts.innerText = 
        "Contact us! \nEmail - fakeemail@fakeemail.com \nPhone - 555-555-5555"
    contactContainer.appendChild(contacts)

    return contactContainer;
}


function displayAbout() {
    const about = document.createElement('div')
    about.setAttribute('id', 'about')

    about.appendChild(buildHeading());
    about.appendChild(buildStatement());
    about.appendChild(buildReview());
    about.appendChild(buildContact());

    return about;
}

export default displayAbout