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


// // selectez personajul folosind o clasa
// let yasuo = document.querySelectorAll(".personaj")[0];
// let lux = document.querySelectorAll(".personaj")[1];
// let salveaza = document.querySelector("button");

// let speedInput = document.querySelector("#speed");
// let skinInput = document.querySelector("#skin");
// let championSelect = document.querySelector("#champion");
// let speed = 50;
// // personajul porneste din coltul din stanga sus
// yasuo.style.top = 0;
// yasuo.style.left = 0;



// mutaPersonaj = function (event) {
//     console.log("muta personaj", event)
//     const intTop = parseInt(yasuo.style.top);
//     const intLeft = parseInt(yasuo.style.left);

//     console.log("speed", speed)
//     let compStyles = window.getComputedStyle(yasuo);
//     const yasuoWidth = parseInt(compStyles.getPropertyValue("width"));
//     switch (event.key) {
//         case 's':
//             yasuo.style.top = intTop + speed + 'px';
//             break;
//         case 'w':
//             yasuo.style.top = intTop - speed + 'px';
//             break;
//         case 'd':
//             if (intLeft + speed + yasuoWidth <= window.innerWidth) {
//                 yasuo.style.left = intLeft + speed + 'px';
//             }
//             break;
//         case 'a':
//             if (intLeft - speed >= 0) {
//                 yasuo.style.left = intLeft - speed + 'px';
//             }
//             break;
//     }
// }


// marcheazaClick = (event) => {
//     console.log("event este", event);

//     if (event.target !== document.body) {
//         return;
//     }

//     let div = document.createElement("div");
//     let paragraf = document.createElement("p");
//     let text = "pageX: " + event.pageX + " pageY " + event.pageY;

//     paragraf.innerHTML = text;
//     div.style.border = "2px solid blue";
//     div.style.backgroundColor = "red";
//     div.style.width = "75px";
//     div.style.height = "75px";

//     div.style.left = event.pageX + "px";
//     div.style.top = event.pageY + "px";
//     div.style.position = "absolute";
//     div.appendChild(paragraf);

//     document.body.appendChild(div)

// }


// // keydown
// // keyup
// // keypress
// window.addEventListener("keypress", mutaPersonaj);

// window.addEventListener("click", marcheazaClick)


// Instantiem un obiect numit xhr , care e de tipul XMLHttpRequest
var xhr = new XMLHttpRequest();

// Apelul este async, ceea ce inseamna ca dureaza pana ne raspunde serverul (de la cateva milisecunde la cateva zeci de secunde).
// Functiona onload se activeaza cand primim un raspuns de la server.
xhr.onload = function () {

    // In xhr.status aflam ce status-code are cererea noastra. In general cele cu 200 sunt bune, iar cele cu 400 si 500 sunt rele.
    if (xhr.status >= 200 && xhr.status < 300) {
        // Daca request-ul a fost facut cu succes
        console.log('success!', xhr);
        console.log("raspunsul pe care il primim este sub forma de string", xhr.response);
        console.log("De cele mai multe ori vrem sa convertim raspunsul la obiect JSON ca sa putem utiliza datele", JSON.parse(xhr.response))
    } else {
        // Daca avem FAIL (ex: nu exista metoda din backend pe care vrem sa o apelam sau nu avem conexiune la internet etc)
        console.log('The request failed!');
    }

    // Codul de aici ruleaza mereu, indiferent de status
    console.log('This always runs...');
};

//Acum ca am definit metoda xhr.onload putem sa facem un request de tip GET catre jsonplacehoder
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();












