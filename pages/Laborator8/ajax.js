var listaPostari = null;
// Instantiem un obiect numit xhr , care e de tipul XMLHttpRequest
var xhr = new XMLHttpRequest();

// Apelul este async, ceea ce inseamna ca dureaza pana ne raspunde serverul (de la cateva milisecunde la cateva zeci de secunde).
// Functiona onload se activeaza cand primim un raspuns de la server.
xhr.onload = function () {

    // In xhr.status aflam ce status-code are cererea noastra. In general cele cu 200 sunt bune, iar cele cu 400 si 500 sunt rele.
    if (xhr.status >= 200 && xhr.status < 300) {
        // Daca request-ul a fost facut cu succes
        console.log('success!', xhr);
        // console.log("raspunsul pe care il primim este sub forma de string",xhr.response);
        console.log("De cele mai multe ori vrem sa convertim raspunsul la obiect JSON ca sa putem utiliza datele",JSON.parse(xhr.response))
        listaPostari = JSON.parse(xhr.response);
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

window.onload = function () {

    var button = document.querySelector("button");
    var catei = document.querySelectorAll("button")[1];
    var container = document.querySelector("#postari");
    button.addEventListener("click",function () {
        console.log("clicked",listaPostari);
        container.style.border= "5px solid red";
        listaPostari.forEach(function (postare) {
            var title = document.createElement("h1");
            title.innerHTML = postare.title;

            var text = document.createElement("p");
            text.innerHTML = postare.body;

            var newPost = document.createElement("div");
            newPost.style.backgroundColor = "yellow";
            newPost.style.margin = "5px";
            newPost.appendChild(title);
            newPost.appendChild(text);

            container.appendChild(newPost)

        })
    });

    catei.addEventListener("click",function () {
        console.log("catei clicked")
        var iframe = document.querySelector("iframe");
        if( iframe.style.display === "none")
        {
            iframe.style.display = "";
        }
        else{
            iframe.style.display = "none";
        }

    })
};

$.get( "https://jsonplaceholder.typicode.com/posts")
    .done(function(response) {
        console.log( "s-a terminat cu bine",response);
    })
    .fail(function(error) {
        console.log( "error",error);
    })
    .always(function() {
        console.log( "Cod-ul din .always se apeleaza de fiecare data, indiferent daca request-ul a fost cu success sau cu fail" );
    });


fetch("https://jsonplaceholder.typicode.com/posts") // Call the fetch function passing the url of the API as a parameter
    .then(function(response) {
        // Daca a fost totul cu success
        var fetchData = null;
        // Spre deosebire de primele 2 variante, fetch API ne intoarce o promisiune
        // fara sa intram in detalii tehnice, metoda response.json() converte promisiunea la un obiect de tip JSON care cotnine datele noastre
        // dar trebuie sa folosim "then" ca sa asteptam pana are loc conversia (pt ca response.json() este async)
        response.json().then(function(data)
        {
            console.log("response din Fetch API",data);
            fetchData = data;
        }
        );

    })
    .catch(function(error) {
        // Daca am avut o eroare
        console.log("Eroarea este",error);
    });



