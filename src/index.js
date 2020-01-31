const breeds = []
const imgContainer = document.querySelector("#dog-image-container")
const breedContainer = document.querySelector("#dog-breeds")
const dropdown = document.querySelector('#breed-dropdown')


document.addEventListener("DOMContentLoaded", function () {
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = "https://dog.ceo/api/breeds/list/all"

    getImageData(imgUrl)
    getBreedData(breedUrl)
    dropdown.addEventListener('change', function(e) {
        filterByLetter(e)
    })
    
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


    
function filterByLetter(e) {
    let filterLetter = e.target.value
    const newArray = [...breeds]
    let filteredArray = newArray.filter((breed) => breed.startsWith(filterLetter))
    breedContainer.innerHTML = ""
    createBreedLIs(filteredArray)
}


//         .then(function(){
//             const myLi = document.querySelectorAll('li')
//             for(const element of myLi) {
//                 element.addEventListener('click', function(e){
//                     e.target.style.color = "blue"
//                 })
//             }
//         })
//         .then(function() {
//             const dropdown = document.querySelector('#breed-dropdown')
//             const myLi = document.querySelectorAll('li')
//             dropdown.addEventListener('change', function(e){
//                 let letter = e.target.value
//                 filtering(letter)
//             })
               
//             function filtering(letter){
//                 let notfilteredArray = []
//                 for(const element of myLi) {
//                     notfilteredArray.push(element.innerText)
//                 }
//                 filteredArray = notfilteredArray.filter( (breed) => breed.startsWith(letter) )
                
//                 breedContainer.innerHTML = []

//                 for(const element of filteredArray) {
//                     let listElement = document.createElement("li")
//                     listElement.innerHTML = element
//                     breedContainer.appendChild(listElement)
//                 }
//             }
//         })


    
    
    









// // .then(function() {
// //     const breedsOptions = document.querySelectorAll('option')
// //     for (const element of breedsOptions) {
// //         element.addEventListener('click', function(e){
// //             let letter = e.target.value
// //             const myLi = document.querySelectorAll('li')
// //             myLi.filter((breed) => breed.startsWith(letter))
// //         })
// //     }
// // })

// document.addEventListener("DOMContentLoaded", function () {
    
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//     const breedContainer = document.querySelector("#dog-breeds")

//     fetch(imgUrl)
//         .then(function(response) {
//             return response.json() 
//         })
//         .then(function(data) {
//             const imgArray = data.message
//             const imgContainer = document.querySelector("#dog-image-container")
            
//             for(const element of imgArray) {
//                 let image = document.createElement("img")
//                 image.src = element
//                 image.width = "200"
//                 imgContainer.appendChild(image)
//             }
//         })

//     const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//     fetch(breedUrl)
//         .then(function(response) {
//             return response.json() 
//         })
//         .then(function(data) {
//             const breedArray = data.message
            
//             for(const key in breedArray) {
//                 let listElement = document.createElement("li")
//                 listElement.innerHTML = key
//                 breedContainer.appendChild(listElement)
//             }
//         })
//         .then(function(){
//             const myLi = document.querySelectorAll('li')
//             for(const element of myLi) {
//                 element.addEventListener('click', function(e){
//                     e.target.style.color = "blue"
//                 })
//             }
//         })
//         .then(function() {
//             const dropdown = document.querySelector('#breed-dropdown')
//             const myLi = document.querySelectorAll('li')
//             dropdown.addEventListener('change', function(e){
//                 let letter = e.target.value
//                 filtering(letter)
//             })
               
//             function filtering(letter){
//                 let notfilteredArray = []
//                 for(const element of myLi) {
//                     notfilteredArray.push(element.innerText)
//                 }
//                 filteredArray = notfilteredArray.filter( (breed) => breed.startsWith(letter) )
                
//                 breedContainer.innerHTML = []

//                 for(const element of filteredArray) {
//                     let listElement = document.createElement("li")
//                     listElement.innerHTML = element
//                     breedContainer.appendChild(listElement)
//                 }
//             }
//         })


    
    
    





// // above here
// })



// // .then(function() {
// //     const breedsOptions = document.querySelectorAll('option')
// //     for (const element of breedsOptions) {
// //         element.addEventListener('click', function(e){
// //             let letter = e.target.value
// //             const myLi = document.querySelectorAll('li')
// //             myLi.filter((breed) => breed.startsWith(letter))
// //         })
// //     }
// // })
