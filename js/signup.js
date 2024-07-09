//implémenter le JS de ma page//

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", valdidateForm);
inputPrenom.addEventListener("keyup", valdidateForm);
inputEmail.addEventListener("keyup", valdidateForm);
inputPassword.addEventListener("keyup", valdidateForm);
inputValidatePassword.addEventListener("keyup", valdidateForm);

function valdidateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const emailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const confirmPasswordOk = validateConfirmationPassword(inputPassword, inputValidatePassword);

    if(nomOk && prenomOk && emailOk && passwordOk && confirmPasswordOk){
        btnValidation.disabled=false;
    }
    else{
        btnValidation.disabled=true;
    }
}

//VERIFICATION DU MAIL AVEC LE REGEX JS//
function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = inputEmail.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

//VERIFICATION DU PASSWORD AVEC LE REGEX JS//
function validatePassword(input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = inputPassword.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

//VERIFICATION DE LA CONFIRMATION DU PASSWORD//
function validateConfirmationPassword(inputPassword, inputValidatePassword){
    if(inputPassword.value == inputValidatePassword.value){
        inputValidatePassword.classList.add("is-valid");
        inputValidatePassword.classList.remove("is-invalid");
        return true;
    }
    else{
        inputValidatePassword.classList.add("is-invalid");
        inputValidatePassword.classList.remove("is-valid");
        return false;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}


