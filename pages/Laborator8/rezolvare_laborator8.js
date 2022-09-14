// var notaAnaliza = 8;
// var notaTW = 5;

// function calculeazaMedia() {

//     console.log("notaTW", notaTW);
//     let media = (notaAnaliza + notaTW) / 2;
//     console.log("media notelor este", media);

//     function ceaMaiMare() {
//         console.log("media", media);
//         if (notaAnaliza >= notaTW) {
//             console.log("Cea mai mare nota este ", notaAnaliza);
//         }
//         else {
//             console.log("Cea mai mare nota este ", notaTW);
//         }
//     }

//     ceaMaiMare();
// }

// console.log("notaAnaliza", notaAnaliza);
// // console.log("media", media);

// calculeazaMedia();


// console.log("mesaj este", mesaj);
// // console.log("media este", media)

// var vs const

// var x = 5;

// x = 9;

// console.log(x);

// const y = 5;

// y = 9;

// console.log(y)

// const PI = 3.14
// const MESAJ_BUTON = "DA CLICK PE BUTON";

// var notaAnaliza = 8;
// var notaTW = 5;

// if (notaTW >= 5 && notaAnaliza >= 5) {

//     var mesaj = "Felicitari, ai promovat";
//     let media = (notaAnaliza + notaTW) / 2;

// }


// Const cu obiecte sau array

// const x = 5;

// const arr = [1, 2, 3, 4, 5];

// arr.push(10);

// console.log(arr);

// arr.pop();
// arr.pop();
// arr.pop();

// console.log(arr);

// var student = {

//     nume: "ion",
//     prenume: "popescu"
// }

// console.log(student);

// student.nume = "stefan";

// console.log(student)


// Arrow functions:

// let primulNumar = 2;
// let alDoileaNumar = 3;

// function adunare(primulNumar, alDoileaNumar) {

//     return primulNumar + alDoileaNumar;
// }

// var scadere = function (primulNumar, alDoileaNumar) {
//     return primulNumar - alDoileaNumar;
// }

// // TODO: Definim impreuna un arrow function

// const rezultatAdunare = adunare(primulNumar, alDoileaNumar);
// const rezultatScadere = scadere(primulNumar, alDoileaNumar);

// console.log(rezultatAdunare)
// console.log(rezultatScadere)


// class Champion {
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//         this.position = 0;
//         this.src = "https://www.pinclipart.com/picdir/big/200-2003751_28-collection-of-yasuo-drawing-chibi-league-of.png"
//     }
//     move() {
//         this.position = this.position + this.speed;
//         return this.position;
//     }
// }


// let Yasuo = new Champion("Yasuo", 400);

// console.log(Yasuo)
// console.log(Yasuo.move())
// console.log(Yasuo.move())
// console.log(Yasuo.move())


// selectez personajul folosind o clasa
let yasuo = document.querySelectorAll(".personaj")[0];
let lux = document.querySelectorAll(".personaj")[1];
let salveaza = document.querySelector("button");

let src = null;

let speedInput = document.querySelector("#speed");
let skinInput = document.querySelector("#skin");
let championSelect = document.querySelector("#champion");
let speed = 50;
// personajul porneste din coltul din stanga sus
yasuo.style.top = 0;
yasuo.style.left = 0;


mutaPersonaj = function (event) {
    console.log("event", event)
    if (event.key === 's') {
        yasuo.style.top = parseInt(yasuo.style.top) + 50 + 'px';
    }
    if (event.key === 'w') {
        yasuo.style.top = parseInt(yasuo.style.top) - 50 + 'px';
    }

    if (event.key === 'd') {
        yasuo.style.left = parseInt(yasuo.style.left) + 50 + 'px';
    }

    if (event.key === 'a') {
        yasuo.style.left = parseInt(yasuo.style.left) - 50 + 'px';
    }
}

mutaPersonaj2 = function (event) {
    const intTop = parseInt(yasuo.style.top);
    const intLeft = parseInt(yasuo.style.left);

    console.log("speed", speed)
    let compStyles = window.getComputedStyle(yasuo);
    yasuoWidth = parseInt(compStyles.getPropertyValue("width"));
    switch (event.key) {
        case 's':
            yasuo.style.top = intTop + speed + 'px';
            break;
        case 'w':
            yasuo.style.top = intTop - speed + 'px';
            break;
        case 'd':
            if (intLeft + speed + yasuoWidth <= window.innerWidth) {
                yasuo.style.left = intLeft + speed + 'px';
            }
            break;
        case 'a':
            if (intLeft - speed >= 0) {
                yasuo.style.left = intLeft - speed + 'px';
            }
            break;
        case 'Enter':
            speed = speed + 100;


    }
}

schimbaSkin = function (target, url) {
    if (url) {
        target.src = url;
    }
}

schimbaBackground = (event) => {
    if (event.code === "Space") {
        document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080/?random&t=" + new Date().getTime() + ")'";
    }
}

marcheazaClick = (event) => {
    console.log("event este", event);

    if (event.target !== document.body) {
        if (event.target.classList.contains("menu-image")) {
            src = event.target.currentSrc;

        }
        return;
    }

    if (src) {
        const imagine = document.createElement("img");
        imagine.src = src;
        imagine.style.left = event.pageX + "px";
        imagine.style.top = event.pageY + "px";
        imagine.style.width = "75px";
        imagine.style.height = "75px";
        imagine.style.position = "absolute";
        document.body.appendChild(imagine);
    }
    else {
        let div = document.createElement("div");
        let paragraf = document.createElement("p");
        let text = "pageX: " + event.pageX + " pageY " + event.pageY;

        paragraf.innerHTML = text;
        div.style.border = "2px solid red";
        div.style.backgroundColor = "red";
        div.style.width = "75px";
        div.style.height = "75px";

        div.style.left = event.pageX + "px";
        div.style.top = event.pageY + "px";
        div.style.position = "absolute";
        div.appendChild(paragraf);

        document.body.appendChild(div)
    }

}


window.addEventListener("keypress", mutaPersonaj2);
window.addEventListener("keypress", schimbaBackground);
window.addEventListener("click", marcheazaClick)

salveaza.addEventListener("click", () => {
    var selectedChampion = championSelect.options[championSelect.selectedIndex].value;
    console.log("champion select", selectedChampion)
    console.log("skinInput.value", skinInput.value)

    speed = parseInt(speedInput.value) || 50;
    console.log("speed", speed)
    schimbaSkin(document.querySelector("#" + selectedChampion), skinInput.value)
});



// https://png2.cleanpng.com/sh/088beef41a06af1b853a20023068885d/L0KzQYm3V8E5N5lniZH0aYP2gLBuTfxmaZh6fZ94Zj3vdbjsjvR0NZRted95aXBxg37yjCJmaV5ygdY2c3Xkg7F1Tflvfpp5ReVxZX6wicbsTcVjPJc2e9hrZEnnSYS7TsExOGo9SqsCMUW2QYq4UcQyQWkASqU3cH7q/kisspng-league-of-legends-champions-korea-mid-season-invit-shen-yue-5b4f1cfbd9d934.1009829715319114198923.png










