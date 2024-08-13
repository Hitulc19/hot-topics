// GET THE REFERENCES
const container = document.querySelector('.container');
const links = document.querySelectorAll('nav a');
let url = './partials/home.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = (urlFeed) => {
    fetch(urlFeed)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
};

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = (event) => {
    event.preventDefault();
    const urlFeed = event.target.getAttribute('href');
    loadContent(urlFeed);
};

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER
links.forEach(link => link.addEventListener('click', selectContent));
