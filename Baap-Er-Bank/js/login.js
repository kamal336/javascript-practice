// get user 
document.getElementById('submit').addEventListener('click',function(){
   let emailField = document.getElementById('email');
   let emailValue = emailField.value;
   let passwordField = document.getElementById('password');
   let passwordValue = passwordField.value;

   if(emailValue == 'kamal@gmail.com' && passwordValue == 'kamal'){
       window.location.href = 'banking.html';
   }
})