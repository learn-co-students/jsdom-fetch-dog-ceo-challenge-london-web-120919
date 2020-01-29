document.addEventListener("DOMContentLoaded", function () {
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedContainer = document.querySelector("#dog-breeds")

    fetch(imgUrl)
        .then(function(response) {
            return response.json() 
        })
        .then(function(data) {
            const imgArray = data.message
            const imgContainer = document.querySelector("#dog-image-container")
            
            for(const element of imgArray) {
                let image = document.createElement("img")
                image.src = element
                image.width = "200"
                imgContainer.appendChild(image)
            }
        })

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
        .then(function(response) {
            return response.json() 
        })
        .then(function(data) {
            const breedArray = data.message
            
            for(const key in breedArray) {
                let listElement = document.createElement("li")
                listElement.innerHTML = key
                breedContainer.appendChild(listElement)
            }
        })
        .then(function(){
            const myLi = document.querySelectorAll('li')
            for(const element of myLi) {
                element.addEventListener('click', function(e){
                    e.target.style.color = "blue"
                })
            }
        })
        .then(function() {
            const dropdown = document.querySelector('#breed-dropdown')
            const myLi = document.querySelectorAll('li')
            dropdown.addEventListener('change', function(e){
                let letter = e.target.value
                filtering(letter)
            })
               
            function filtering(letter){
                let notfilteredArray = []
                for(const element of myLi) {
                    notfilteredArray.push(element.innerText)
                }
                filteredArray = notfilteredArray.filter( (breed) => breed.startsWith(letter) )
                
                breedContainer.innerHTML = []

                for(const element of filteredArray) {
                    let listElement = document.createElement("li")
                    listElement.innerHTML = element
                    breedContainer.appendChild(listElement)
                }
            }
        })


    
    
    





// above here
})



// .then(function() {
//     const breedsOptions = document.querySelectorAll('option')
//     for (const element of breedsOptions) {
//         element.addEventListener('click', function(e){
//             let letter = e.target.value
//             const myLi = document.querySelectorAll('li')
//             myLi.filter((breed) => breed.startsWith(letter))
//         })
//     }
// })
