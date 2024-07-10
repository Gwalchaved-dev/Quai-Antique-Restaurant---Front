const inputEmail= document.getElementById("EmailInput");
const inputPassword= document.getElementById("PasswordInput");
const btnSignin= document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //appeler l'api pour vérifier les credentials en BDD
    if(inputEmail.value == "test@mail.com" && inputPassword.value == "123"){
        alert("Vous êtes connecté");
        
          //Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);
          //placer ce token en cookie

        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else{
        inputEmail.classList.add("is-invalid");
        inputPassword.classList.add("is-invalid");
    }
}
