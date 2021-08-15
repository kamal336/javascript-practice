// login event handler
document.getElementById('login-btn').addEventListener('click',function(){
    const loginEmail = document.getElementById('email-input');
    const emailField = loginEmail.value;

    const passwordField = document.getElementById('password-input');
    const passwordInput = passwordField.value;

    // to login 
    if(emailField == 'naim@gmail.com' && passwordInput == 'naim'){
        window.location.href = 'mybanking.html';

    }
})