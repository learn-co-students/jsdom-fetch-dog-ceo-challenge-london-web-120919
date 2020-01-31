const breeds = []
const imgContainer = document.querySelector("#dog-image-container")
const breedContainer = document.querySelector("#dog-breeds")
const dropdown = document.querySelector('#breed-dropdown')


document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = "https://dog.ceo/api/breeds/list/all"

    getImageData(imgUrl)
    getBreedData(breedUrl)    
})

// get images

function getImageData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => getImages(data))
}

function getImages(imgData) {
    const imgArray = imgData.message
    for(const element of imgArray) {
        let image = document.createElement("img")
        image.src = element
        image.width = "200"
        imgContainer.appendChild(image)
    }
}

// get breeds

function getBreedData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => getBreeds(data))
}

function getBreeds(breedData) {
    const breedObject = breedData.message
    for(const key in breedObject) {
        breeds.push(key)
    }
    createBreedLIs(breeds)
}

// create list elements
function createBreedLIs(breedList) {
    for(const element of breedList) {
        let listElement = document.createElement("li")
        listElement.innerHTML = element
        breedContainer.appendChild(listElement)
        changeColor(listElement)
    }
}

// change color on click
function changeColor(listElement) {
    listElement.addEventListener('click', function(e){
        e.target.style.color = "red"
    })
}

// filter function
dropdown.addEventListener('change', function(e) {
    filterByLetter(e)
})
    
function filterByLetter(e) {
    let filterLetter = e.target.value
    const newArray = [...breeds]
    let filteredArray = newArray.filter((breed) => breed.startsWith(filterLetter))
    breedContainer.innerHTML = ""
    createBreedLIs(filteredArray)
}

