var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");



function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is Required'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }

    nameError.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    // nameError.style.color = "green"
    return true;
}


function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone No. is Required'
        return false;
    }
    if(phone.length !== 11){
        phoneError.innerHTML = "Phone No. should be 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Only Digits 0-10";
        return false;
    }
    
    phoneError.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    phoneError.style.fontSize = "10px"
    return true;
}


function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if(email.length === 0){
        emailError.innerHTML = "Email is Required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Valid";
        return false;
    }

    emailError.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + "more characters left";
        return false;
    }
    messageError.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fill up the Form";
        setTimeout(function(){
            submitError.style.display = "none";
        }, 5000)
        return false;
    }
}
