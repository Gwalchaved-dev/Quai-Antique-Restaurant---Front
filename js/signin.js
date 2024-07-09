const emailInput= document.getElementById("emailInput");
const passwordInput= document.getElementById("passwordInput");
const btnSignin= document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //appeler l'api pour vérifier les credentials en BDD
    if(emailInput.value == "test@mail.com" && passwordInput.value == "123"){
        alert("Vous êtes connecté");
        windowlocation.replace("/");
    }
    else{
        emailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}
