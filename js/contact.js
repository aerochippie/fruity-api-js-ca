const form = document.querySelector("#contactForm")
const firstName = document.querySelector("#firstname")
const firstNameError= document.querySelector("#firstnameError")
const subject = document.querySelector("#subject")
const subjectError = document.querySelector("#subjectError")
const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address")
const addressError = document.querySelector("#addressError");

form.addEventListener("submit", validateForm);
function validateForm(e) {
    e.preventDefault();


    if(validateEmail(email.value) === true){
        emailError.style.display="none";
    }
    else {
        emailError.style.display ="block";
    }


    if(validateLength(firstName.value, 0)=== true){
        firstNameError.style.display ="none";
    }else{
        firstNameError.style.display="block";
    }

    if(validateLength(subject.value, 9)=== true){
        subjectError.style.display ="none";
    }else{
        subjectError.style.display="block";
    }

    if(validateLength(address.value, 24)=== true){
        addressError.style.display ="none";
    }else{
        addressError.style.display="block";
    }}


function validateEmail(email){
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validateLength(value, len){
    if(value.trim().length > len){
        return true;
    }
    else{
            return false;
        }
    };