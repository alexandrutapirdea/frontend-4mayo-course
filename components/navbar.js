class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    /* pre {
background: #f4f4f4;
border: 1px solid #ddd;
border-left: 3px solid #f36d33 !important;
color: #666;
page-break-inside: avoid;
font-family: monospace;
font-size: 15px;
line-height: 1.6;
margin-bottom: 1.6em;
max-width: 100%;
overflow: auto;
padding: 1em 1.5em;
display: block;
word-wrap: break-word;
}  */

    .hide {
        display: none;
    }

    pre.prettyprint {
        display: block;
        background-color: #333
    }

    pre .nocode {
        background-color: none;
        color: #000
    }

    pre .str {
        color: #ffa0a0
    }

    /* string  - pink */
    pre .kwd {
        color: #f0e68c;
        font-weight: bold
    }

    pre .com {
        color: #87ceeb
    }

    /* comment - skyblue */
    pre .typ {
        color: #98fb98
    }

    /* type    - lightgreen */
    pre .lit {
        color: #cd5c5c
    }

    /* literal - darkred */
    pre .pun {
        color: #fff
    }

    /* punctuation */
    pre .pln {
        color: #fff
    }

    /* plaintext */
    pre .tag {
        color: #f0e68c;
        font-weight: bold
    }

    /* html/xml tag    - lightyellow */
    pre .atn {
        color: #bdb76b;
        font-weight: bold
    }

    /* attribute name  - khaki */
    pre .atv {
        color: #ffa0a0
    }

    /* attribute value - pink */
    pre .dec {
        color: #98fb98
    }

    /* decimal         - lightgreen */

    /* Specify class=linenums on a pre to get line numbering */
    ol.linenums {
        margin-top: 0;
        margin-bottom: 0;
        color: #AEAEAE
    }

    /* IE indents via margin-left */
    li.L0,
    li.L1,
    li.L2,
    li.L3,
    li.L5,
    li.L6,
    li.L7,
    li.L8 {
        list-style-type: none
    }

    /* Alternate shading for lines */
    li.L1,
    li.L3,
    li.L5,
    li.L7,
    li.L9 {}

    li.L0,
    li.L1,
    li.L2,
    li.L3,
    li.L5,
    li.L6,
    li.L7,
    li.L8 {
        list-style-type: decimal !important;
    }

    li.L1,
    li.L3,
    li.L5,
    li.L7,
    li.L9 {
        background: inherit !important;
    }
</style>
    <div class="top navbar navbar-expand-lg navbar-light bg-light custom-navbar">
    <div class="custom-row" class="collapse navbar-collapse">
        <div class="col-sm-3">
            <div class="logo">
                <a href="../index.html"><img src="../css/images/logo.png" alt="FrontendJourney" />
                </a>
            </div>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="col-sm-9" id="navbarSupportedContent">
            <nav id="desktop-menu">
                <ul class="sf-menu" id="navigation">
                    <li><a href="../index.html">Acasa</a>
                    <li><a href="./Cariera.html">Carieră</a>
                    </li>
                    <li class="nav-link disabled"><a href="#">Nivel 1 - Începător <i class="fa fa-sort-amount-asc"
                                aria-hidden="true"></i></a>
                        <ul class="dropdown-ul">
                            <li><a href="./Laborator1.html">Curs 1 - Introducere + HTML</a></li>
                            <li><a href="./Laborator2.html">Curs 2 - HTML + GIT</a></li>
                            <li><a href="./laborator3.html">Curs 3 - Introducere in CSS</a></li>
                            <li><a href="./Laborator4.html">Curs 4 - CSS (media query)</a></li>
                            <li><a href="./Laborator5.html">Curs 5 - CSS (Flexbox, Forms, Bootstrap) </a></li>
                            <li><a href="./Laborator6.html">Curs 6 - Introducere in Javascript</a></li>
                            <li><a href="./Laborator7.html">Curs 7 - JS(if, switch, loops) </a></li>
                            <li><a href="./Laborator8.html">Curs 8 - Interactiunea HTML, CSS, JS</a></li>
                            <li><a href="./Laborator9.html">Curs 9 - Interactiunea HTML, CSS, JS</a></li>
                            <li><a href="./Cod_laboratoare/Laborator%2010/validariFormulare.html">Curs 10 - JS avansat</a></li>
                            <li><a href="./Laborator10_NodeJS.html">Curs 11 - Comunicarea FrontEnd - BackEnd</a></li>
                        </ul>
                    </li>
                    <li class="nav-link disabled"><a href="#">Nivel 2 - Avansat <i class="fa fa-sort-amount-asc"
                    aria-hidden="true"></i></a>
            <ul class="dropdown-ul">
                <li><a href="./Laborator1.html">Curs 1 - Privire de ansamblu</a></li>
                <li><a href="./Laborator2.html">Curs 2 - React: Notiuni de bază</a></li>
                <li><a href="./Laborator2.html">Curs 3 - React în actiune</a></li>
                <li><a href="./Laborator2.html">Curs 4 - React avansat</a></li>
                <li><a href="./Laborator2.html">Curs 5 - Validarea formularelor</a></li>
                <li><a href="./Laborator2.html">Curs 6 - Navigarea într-un SPA</a></li>
                <li><a href="./Laborator2.html">Curs 7 - Redux: state management</a></li>
                <li><a href="./Laborator2.html">Curs 8 - Redux avansat</a></li>
                <li><a href="./Laborator2.html">Curs 9 - Testarea aplicatiei (Unit testing + e2e)</a></li>
                <li><a href="./Laborator2.html">Curs 10 - Clean code</a></li>
                <li><a href="./Laborator2.html">Curs 11 - Prezentarea proiectelor</a></li>
            </ul>
        </li>
                    <li><a href="./ProiectHML.html">Proiect HTML + CSS</a></li>
                    <li><a href="./ProiectJS.html">Proiect Javascript</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>
    `;
  }
}

customElements.define("custom-navbar", Navbar);
