function startGame() {
  const instructiuni = document.getElementById("instructiuni");
  const help = document.getElementById("help");
  const manual = document.querySelector(".manual-container");
  instructiuni.style.display = "none";
  help.style.display = "";
  manual.classList.remove("hide");
  help.addEventListener("click", function () {
    instructiuni.style.display = "";
    help.style.display = "none";
  });
}

function submit() {
  const an = document.getElementById("an").value;
  const model = document.getElementById("model").value;
  if (an == 2022 && model == "ROBOMB") {
    console.log("Da");
    const apeluriAPI = document.querySelectorAll(".informatie");
    apeluriAPI.forEach((apel) => apel.classList.remove("hide"));
  }
}
