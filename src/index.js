console.log('%c HI', 'color: firebrick')
let breedsArray = []
const colours = {
    0: 'red',
    1: 'orange',
    2: 'yellow',
    3: 'green',
    4: 'blue',
    5: 'indigo',
    6: 'violet'
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    fetchImages()
    fetchBreeds()

    document.getElementById('dog-breeds').addEventListener("click", (event) => {
        event.target.style.color = colours[Math.floor(Math.random() * Math.floor(6))];
    })

    document.getElementById('breed-dropdown').addEventListener("change", (event) => {
        filterBreeds(event.target.value)
    })
})

function renderDogPic(json) {
    let imageNode = document.getElementById('dog-image-container');
    for (let index = 0; index < json.length; index++) {
        let div = document.createElement('div')
        let image = document.createElement('img')
        div.id = index
        image.id = index
        image.src = json[index]
        div.appendChild(image)
        imageNode.appendChild(div)
    }
}



function renderDogBreed(breeds) {

    let listNode = document.getElementById('dog-breeds');
    listNode.innerHTML = ''
    for (let index = 0; index < breeds.length; index++) {
        let list = document.createElement('li')
        list.id = index
        list.innerText = breeds[index]
        listNode.appendChild(list)
    }
}

function filterBreeds(letter) {
    let filteredArray = []
    breedsArray.forEach(e => {
        if (e[0] == letter) {
            filteredArray.push(e)
        }
    })

    renderDogBreed(filteredArray);
}


function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(json => renderDogPic(json.message));

}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(function (json) {
            breedsArray = Object.keys(json.message)
            renderDogBreed(breedsArray)
        })
}