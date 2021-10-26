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

    <div class="card-icon bg-white col-2 d-flex flex-column align-items-center pt-4 pb-4 ms-2">
        <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.type} fs-1"></i>
        <p class="mb-0">${icon.name}</p>
    </div>
    
    `
    document.querySelector(".container-fluid").insertAdjacentHTML("beforeend", cardElement)

})

let iconList = document.getElementsByTagName("i")
// console.log(iconList);

for (let index = 0; index < iconList.length; index++) {
    const singleIcon = iconList[index];

    if (singleIcon.classList.contains("user")) {
        singleIcon.classList.add("purple")
    } else if (singleIcon.classList.contains("vegetable")) {
        singleIcon.classList.add("orange")
    } else if (singleIcon.classList.contains("animal")) {
        singleIcon.classList.add("blue")
    }

}

// alternativa: assegnare alle classi ${icon.type} il colore direttamente in CSS?
