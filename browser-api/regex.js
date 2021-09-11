// regular expression 
const getEmail = () =>{
    const emailField = document.getElementById('input-field');
    const email = emailField.value;
    emailField.value = '';
   
    checkValid(email)
}

const checkValid = (email) =>{
    const success = document.getElementById('demo');
    
    success.style.display = 'block'
    success.textContent = '';
   
    const invalidEmail = document.getElementById('demo2');
    invalidEmail.style.display = 'block'
    invalidEmail.textContent  = '';
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return success.innerHTML = 'Successfully Login';
    }else{
        return invalidEmail.innerHTML = 'Please Enter a valid email';
    }
}
