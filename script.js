const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const passwordInput = document.querySelector("#password")
const emailInput = document.querySelector("#email")

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    if(nameInput.value ===""){
        alert("Campo Do Nome Está Vazio");
        return;
    }
    if(emailInput.value ==="" || !emailValid(emailInput.value,)) {
        alert("Campo De email está vazio");
        return;
    }
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha tem que ter no minimo 8 dígitos");
        return;
    }
    form.submit();
});

function emailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if(emailRegex.test(email)){
        return true;
    }else
    return false;
}

function validatePassword(password, minDigits) {
    if(password.length >=minDigits)
    return true

    return false
}