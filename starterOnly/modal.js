function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");



console.log(modalBtn);
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//Issue #1
const close = document.querySelectorAll('.close');

//fonction de fermeture de la modale
function closeModal(){
  modalbg.style.display = "none";
}

// Appel de la fonction fermer modal au click
close.forEach((span) => span.addEventListener("click", closeModal));






