class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="top navbar navbar-expand-lg navbar-light bg-light custom-navbar">
    <div class="row" class="collapse navbar-collapse">
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
                    <li><a href="./Notare.html">Notare</a>
                    </li>
                    <li class="nav-link disabled"><a href="#">Laboratoare <i class="fa fa-sort-amount-asc"
                                aria-hidden="true"></i></a>
                        <ul class="dropdown-ul">
                            <li><a href="./Laborator1.html">Laborator 1</a></li>
                            <li><a href="./Laborator2.html">Laborator 2</a></li>
                            <li><a href="./laborator3.html">Laborator 3</a></li>
                            <li><a href="./Laborator4.html">Laborator 4</a></li>
                            <li><a href="./Laborator5.html">Laborator 5</a></li>
                            <li><a href="./Laborator6.html">Laborator 6</a></li>
                            <li><a href="./Laborator7.html">Laborator 7</a></li>
                            <li><a href="./Laborator8.html">Laborator 8</a></li>
                            <li><a href="./Laborator9.html">Laborator 9</a></li>
                            <li><a href="./Cod_laboratoare/Laborator%2010/validariFormulare.html">Laborator
                                    10_RECAPITULARE</a></li>
                            <li><a href="./Laborator10_NodeJS.html">Laborator
                                    10_Node</a></li>
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
