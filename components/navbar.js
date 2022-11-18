class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
   
<nav class="navbar fixed-top navbar-dark navbar-expand-lg" style="background-color: #051726; margin-bottom:50px;">
<div class="container-fluid">
  <div class="col-sm-3">
        <a href="../index.html"><img src="../css/images/logo.png" alt="FrontendJourney" alt="Logo" width="150" height="120" class="d-inline-block align-text-top" />
        </a>
</div>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" href="../index.html">Acasă</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="./Cariera.html">Carieră</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Nivel 1 - Începător
        </a>
        <ul class="dropdown-menu">
          <li><a href="./Laborator1.html" class="dropdown-item">Curs 1 - Introducere + HTML</a></li>
          <li><a href="./Laborator2.html" class="dropdown-item">Curs 2 - HTML + GIT</a></li>
          <li><a href="./laborator3.html" class="dropdown-item">Curs 3 - Introducere in CSS</a></li>
          <li><a href="./Laborator4.html" class="dropdown-item">Curs 4 - CSS (media query)</a></li>
          <li><a href="./Laborator5.html" class="dropdown-item">Curs 5 - CSS (Flexbox, Forms, Bootstrap) </a></li>
          <li><a href="./Laborator6.html" class="dropdown-item">Curs 6 - Introducere in Javascript</a></li>
          <li><a href="./Laborator7.html" class="dropdown-item">Curs 7 - JS(if, switch, loops) </a></li>
          <li><a href="./Laborator8.html" class="dropdown-item">Curs 8 - Interactiunea HTML, CSS, JS</a></li>
          <li><a href="./Laborator9.html" class="dropdown-item">Curs 9 - Interactiunea HTML, CSS, JS</a></li>
          <li><a href="./Cod_laboratoare/Laborator%2010/validariFormulare.html" class="dropdown-item">Curs 10 - JS avansat</a></li>
          <li><a href="./Laborator10_NodeJS.html" class="dropdown-item">Curs 11 - Comunicarea FrontEnd - BackEnd</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="./ProiectHML.html">Proiect HTML + CSS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="./ProiectJS.html">Proiect Javascript</a>
      </li>
    </ul>
  </div>
</div>
</nav>
    `;
  }
}

customElements.define("custom-navbar", Navbar);
