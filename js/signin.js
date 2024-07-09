const inputEmail= document.getElementById("EmailInput");
const inputPassword= document.getElementById("PasswordInput");
const btnSignin= document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //appeler l'api pour vérifier les credentials en BDD
    if(inputEmail.value == "test@mail.com" && inputPassword.value == "123"){
        alert("Vous êtes connecté");
        window.location.replace("/");
    }
    else{
        inputEmail.classList.add("is-invalid");
        inputPassword.classList.add("is-invalid");
    }
}
