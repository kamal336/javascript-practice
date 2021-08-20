document.getElementById('case-plus').addEventListener('click',function(){
     updateInput('case', 59, true);
     
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateInput('case', 59,false);
    
});

document.getElementById('phone-plus').addEventListener('click',function(){
     updateInput('phone', 1219, true);
     
});

document.getElementById('phone-minus').addEventListener('click',function(){
    updateInput('phone', 1219,false);
    
});



function updateInput(product,price,increasing){
     const inputField = document.getElementById(product+'-total');
     let inputTotal = inputField.value;
     if(increasing == true){
        inputTotal = parseInt(inputTotal) + 1;
     }else if(inputTotal > 0){
        inputTotal = parseInt(inputTotal) - 1;
     }

     inputField.value = inputTotal;
     const priceField = document.getElementById(product+'-price');
     priceField.innerText = inputTotal * price;
     inputField.value = inputTotal;

     totalPrice()
}

function totalPrice(){
     const phoneTotal = getInput('phone') * 1219;
     const caseTotal = getInput('case') * 59;

     const subTotal = phoneTotal + caseTotal;
     const tax = subTotal/10;
     const totalAmount = subTotal + tax;

     // const phoneInput = document.getElementById('phone-total');
     // const phoneInputText = phoneInput.value;
     // const subTotal = parseInt(phoneInputText) * 1219;
     // const tax = subTotal/10;
     // const totalAmount = subTotal + tax;

     document.getElementById('subtotal').innerText = parseInt(subTotal);
     document.getElementById('tax').innerText = parseInt(tax);
     document.getElementById('total-price').innerText = parseInt(totalAmount);
}

function getInput(productId){
     const inputField = document.getElementById(productId+'-total');
     const inputTotal = parseInt(inputField.value);
          
     return inputTotal;
 }