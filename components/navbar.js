class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="top navbar navbar-expand-lg navbar-light bg-light">
    <div class="row" class="collapse navbar-collapse">
        <div class="col-sm-3">
            <div class="logo">
                <a href="index.html"><img src="./css/images/logo.png" alt="LaboratorTW" />
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
                    <li><a href="index.html">Acasa</a>
                    <li><a href="pages/Notare.html">Notare</a>
                    </li>
                    <li class="nav-link disabled"><a href="#">Laboratoare <i class="fa fa-sort-amount-asc"
                                aria-hidden="true"></i></a>
                        <ul class="dropdown-ul">
                            <li><a href="pages/Laborator1.html">Laborator 1</a></li>
                            <li><a href="pages/Laborator2.html">Laborator 2</a></li>
                            <li><a href="pages/laborator3.html">Laborator 3</a></li>
                            <li><a href="pages/Laborator4.html">Laborator 4</a></li>
                            <li><a href="pages/Laborator5.html">Laborator 5</a></li>
                            <li><a href="pages/Laborator6.html">Laborator 6</a></li>
                            <li><a href="pages/Laborator7.html">Laborator 7</a></li>
                            <li><a href="pages/Laborator8.html">Laborator 8</a></li>
                            <li><a href="pages/Laborator9.html">Laborator 9</a></li>
                            <li><a href="./pages/Cod_laboratoare/Laborator%2010/validariFormulare.html">Laborator
                                    10_RECAPITULARE</a></li>
                            <li><a href="./pages/Laborator10_NodeJS.html">Laborator
                                    10_Node</a></li>
                        </ul>

                    </li>
                    <li><a href="./pages/ProiectHML.html">Proiect HTML + CSS</a></li>
                    <li><a href="./pages/ProiectJS.html">Proiect Javascript</a></li>
                    <li class="observatie"><a href="pages/restanta.html" class="observatie"
                            style="color:red; font-weight: bold;">Restanta</a></li>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
    `;
  }
}

customElements.define("custom-navbar", Navbar);
