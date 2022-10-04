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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Issue #1
const close = document.querySelectorAll(".close");

//fonction de fermeture de la modale
function closeModal(span) {
  span.style.display = "none";
}

// Appel de la fonction fermer modal au click
close.forEach((span) => span.addEventListener("click", function(){closeModal(modalbg)}));

//Issue #2 et #3
// appel des element du DOM
const inputPrenom = document.getElementById("first");
const inputNom = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputNbTournois = document.getElementById("quantity");
const inputDateNaissance = document.getElementById("birthdate");
const radioTournois = document.querySelectorAll('[name="location"]');
const erreurVille = document.getElementById("erreurVille");
const CGV = document.getElementById("checkbox1");


//Verification non vide et au moin 2 caractère
const verificationNbCaractere = (input) => {
  // retire les espaces et vérifie qu'il y à au moin 2 caractère
  if (input.value.replaceAll(" ", "").length < 2) {
    input.parentNode.querySelector('.erreur').textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }

  input.parentNode.querySelector('.erreur').textContent = "";
  return true;
}

//verification de l'email
const verrificationEmail = (input) => {
  //verifie le format Email
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    input.parentNode.querySelector('.erreur').textContent = "";
    return true;
  }
  input.parentNode.querySelector('.erreur').textContent = "Merci de renseigner un Email Valide";
  return false;
}

//verification d'une date de naissance
function verificationDateNassance(input) {
  if (input.value) {
    input.parentNode.querySelector('.erreur').textContent = "";
    return true;
  }
  input.parentNode.querySelector('.erreur').textContent = "Merci de renseigner une date valide";
  return false;
}

//verification que le tournois soit bien un nombre
function verifInputNbTournois(input) {
  //verifie le format nombre
  if (/\d/.test(input.value)) {
    input.parentNode.querySelector('.erreur').textContent = "";
    return true;
  }
  input.parentNode.querySelector('.erreur').textContent = "Ceci doit être un nombre";
  return false;
}
//verification qu'une case dans le lieu du tournois soit coché
function verificationLieuTournois(input) {

  //récupération de la derniere case du tableau d'input
  let nbInput = input.length;
  //verifie qu'une case soit coché
  for (let i = 0; i < nbInput; i++) {
    if (input[i].checked) {
      // 2 balise après la dernière balise P
      input[nbInput - 1].parentNode.querySelector('.erreur').textContent = "";
      return true;
    }
  }
  // 2 balise après la dernière balise P
  input[nbInput - 1].parentNode.querySelector('.erreur').textContent =
    "Pensez à cocher une ville";
  return false;
}

//verification condition générale de vente coché
function verificationCGV(input) {
  if (input.checked) {
    input.parentNode.querySelector('.erreur').textContent = "";
    return true;
  }
  input.parentNode.querySelector('.erreur').textContent =
    "Merci de cocher les conditions d'utilisation";
  return false;
}

// fonction d'envoi
document
  .getElementById("buttonToSubmit")
  .addEventListener("click",  (event) => {
    event.preventDefault();
    // test de toute les fonction pour valider l'envoi du formulaire
     const check = [verificationNbCaractere(inputPrenom),
      verificationNbCaractere(inputNom),
      verrificationEmail(inputEmail),
      verificationDateNassance(inputDateNaissance),
      verifInputNbTournois(inputNbTournois),
      verificationCGV(CGV),
      verificationLieuTournois(radioTournois)];
    if (!check.includes(false)) {
      console.log("true");
      modalbg.style.display = "none";
      modalConfirm.style.display = "block";
    } else {
      console.log("false");
    }
  });


//issue #4

const closeConfirm = document.querySelector(".close-confirm");
const modalConfirm = document.querySelector(".bground-modal-confirm");
closeConfirm.addEventListener("click", function(){
  closeModal(modalConfirm);
  inputPrenom.value="";
  inputNom.value="";
  inputEmail.value="";
  inputDateNaissance.value="";
  inputNbTournois.value = "";
  for (let i = 0; i < radioTournois.length; i++) {
    radioTournois[i].checked = false;
  }
});