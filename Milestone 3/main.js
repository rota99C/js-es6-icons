const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];




icons.forEach((icon, index, array) => {
    const cardElement = `

    <div class="card-icon ${icon.type} bg-white col-2 d-flex flex-column align-items-center pt-4 pb-4 ms-2">
        <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.type} fs-1"></i>
        <p class="mb-0">${icon.name}</p>
    </div>
    
    `
    document.querySelector(".container-fluid").insertAdjacentHTML("beforeend", cardElement)

})

// ciclo per sondare tutte le icone e associare classe ricavata dal type con classe colore

let iconList = document.getElementsByTagName("i")
// console.log(iconList);

for (let index = 0; index < iconList.length; index++) {
    const singleIcon = iconList[index];

    let userIcon = singleIcon.classList.contains("user")
    // console.log(userIcon);
    let animalIcon = singleIcon.classList.contains("animal")
    let vegetableIcon = singleIcon.classList.contains("vegetable")

    if (userIcon) {
        singleIcon.classList.add("purple")
    } else if (vegetableIcon) {
        singleIcon.classList.add("orange")
    } else if (animalIcon) {
        singleIcon.classList.add("blue")
    }

}


// Creiamo una select con i tipi di icone e usiamola per filtrare le icone



let optionList = document.getElementsByTagName("option")


// console.log(cardAnimal);

for (let index = 0; index < optionList.length; index++) {
    const singleOption = optionList[index];
    // console.log(singleOption);



    if (singleOption.attributes[0].value == "animal") {
        this.addEventListener("change", function () {
            // rimangono visibili solo gli animali
            console.log("filtro");

        })
    } else if (singleOption.attributes[0].value == "user") {
        this.addEventListener("change", function () {
            // rimangono visibili solo gli animali
        })
    } else if (singleOption.attributes[0].value == "vegetable") {
        this.addEventListener("change", function () {
            // rimangono visibili solo le verdure
        })
    } else if (singleOption.attributes[0].value == "all") {
        this.addEventListener("change", function () {
            // rimangono visibili tutti
        })
    }

}

/* let card = document.getElementsByClassName(".card-icon")
let cardAnimal = document.getElementsByClassName(".card-icon.animal")
let cardVegetable = document.getElementsByClassName(".card-icon.vegetable")
let cardUser = document.getElementsByClassName(".card-icon.user")
let optionList = document.getElementsByTagName("option")

for (let index = 0; index < card.length; index++) {
    const singleCard = card[index];
    const singleCardAnimal = cardAnimal[index];
    const singleCardVegetable = cardVegetable[index];
    const singleCardUser = cardUser[index];
    const singleOption = optionList[index];

    singleOption.addEventListener("change", function () {
        if (singleOption.attributes[0].value == "animal") {
            singleCardAnimal.style.display = "none";
        }
    })

}
 */