const container = document.querySelector("#lista-animale");
const adaugaBtn = document.querySelector("#adauga-btn");

function initMenuItems() {
    const starsArray = document.querySelectorAll(".fa-star");
    const trashArray = document.querySelectorAll(".fa-trash");

    starsArray.forEach(star => {
        star.addEventListener("click", function () {
            star.classList.toggle("favourite");
        })
    });

    trashArray.forEach(trash => {
        trash.addEventListener("click", async function () {
            let id = trash.parentElement.parentElement.dataset.id
            console.log("id este", trash.parentElement.parentElement.dataset)
            let URL = "http://localhost:3000/sterge-animal/" + id;
            const newAnimalList = await deleteAnimal(URL);
            afiseazaAnimale2(newAnimalList)
        })
    });

}

function afiseazaAnimale() {

    const animaleArray = fetch('http://localhost:3000/lista-animale')
        .then(response => response.json())
        .then(function (animaleArray) {
            animaleArray.forEach(animal => {
                const tempAnimal = `<div class="item">
                <h3>Nume: ${animal.nume}</h3>
                <h3>Animal: ${animal.tip}</h3>
                <img src=${animal.src} alt="imagine-caine">
                <div class="menu">
        
                    <button>Adopta</button>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </div>`

                container.insertAdjacentHTML("beforeend", tempAnimal);
            });

        }
        )
}

async function afiseazaAnimale2() {

    const response = await fetch('http://localhost:3000/lista-animale');

    console.log("response", response)

    const animaleArray = await response.json();
    console.log("animaleArray", animaleArray)

    container.innerHTML = ''

    animaleArray.forEach(animal => {
        console.log(animal)
        const tempAnimal = `<div class="item" data-id=${animal.id}>
        <h3>Nume: ${animal.nume}</h3>
        <h3>Animal: ${animal.tip}</h3>
        <img src=${animal.src} alt="imagine-caine">
        <div class="menu">

            <button>Adopta</button>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-trash" aria-hidden="true"></i>
        </div>`

        container.insertAdjacentHTML("beforeend", tempAnimal);
    });

    initMenuItems();


}


adaugaBtn.addEventListener("click", async function () {
    const nume = document.querySelector("#nume").value;
    const select = document.querySelector("#tip");
    const tip = select.options[select.selectedIndex].value;
    const imagineAnimal = document.querySelector("#imagine-animal").value;

    const newAnimal = {
        nume,
        tip,
        "src": imagineAnimal
    }

    const newAnnimalsList = await postData('http://localhost:3000/adauga-animal', newAnimal)

    console.log("Data", newAnnimalsList)

    afiseazaAnimale2(newAnnimalsList)

})

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

async function deleteAnimal(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    });
    return response.json();
}

afiseazaAnimale2()

