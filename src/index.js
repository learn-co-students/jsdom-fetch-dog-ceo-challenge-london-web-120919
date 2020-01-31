// document.addEventListener(‘DOMContentLoaded’, function() {
    const imgDiv = document.querySelector("#dog-image-container") 
    const ulBreed = document.querySelector("#dog-breeds") 
    //if I don't defer in the script, the js file will be run before than the html, so it doesn't exist yet, 
    const imgURL = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'


    ///////////////////// img //////////////////
    function fetchImgs() {
        fetch(imgURL)  
            .then(function(response) {
                // I have to return Json response to be able to access it in the next then
                // .then is linked to the thing above it, au contrair of ruby, JS doesnt recognize white space.
                return response.json()
            })
            .then(function(json){
                renderDogImages(json.message)
                addStyleToList()
                filterPage()
            } )  
    }
    // how to select each item from the json.message that is an array
    function renderDogImages(dogArray) {
        dogArray.forEach(dogImage => {
            renderDogImage(dogImage)
        })
    }

    //Render the dog image, to be passed on the function above. 

    function renderDogImage(dogImage) {
        let img = document.createElement('img')
        img.height = '150'
        img.src = dogImage 
        imgDiv.append(img)
    }


    /////////////////////////breeds///////////////////////////////

    function fetchBreeds() {
        fetch(breedUrl)
            .then(function(response){
                return response.json()
            })
            .then(function(json){
                // a = json
                renderBreeds(json.message)
            })
    }

    //Object.keys(a.message)
    // select each breed
    function renderBreeds(breedObject) {
        const breedArray = Object.keys(breedObject)
        breedArray.forEach( dogBreed => {
            addToList(dogBreed)
        })
    }

    function addToList(dogBreed) {
        let li = document.createElement('li')
        li.innerText = dogBreed
        li.className = "breed"
        ulBreed.append(li)
    }



    function addStyleToList() {
        const list = document.getElementsByClassName("breed")
        for( const elemente of list ) {
            elemente.addEventListener("click", function(e) {
                        e.target.style.color = "red"
            })
        }
    }

    //////////////////////////// Filter to the page ///////////////////////////////////////////////////////////

    function filterPage() {
        const dropdown = document.querySelector('#breed-dropdown')
        const allBreeds = document.querySelectorAll(".breed")

        dropdown.addEventListener('change',function(e){
            let letter = e.target.value
            filtering(letter)
        })

        function filtering(letter) {
            let notFiltered = []
            for (const element of allBreeds) {
                notFiltered.push(element.innerText)
            }
            filteredArray = notFiltered.filter((breed) => breed.startsWith(letter))
            ulBreed.innerHTML = []
            for (const element of filteredArray){
                let listElements = document.createElement("li")
                listElements.innerHTML = element
                ulBreed.appendChild(listElements)

            }
        }

    }

// });

fetchImgs()
fetchBreeds()
   
