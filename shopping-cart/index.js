document.getElementById('phone-plus').addEventListener('click',function(){
   getInputNumber('phone', 1219, true)
});
document.getElementById('phone-minus').addEventListener('click',function(){
   getInputNumber('phone', 1219, false)
});
document.getElementById('case-plus').addEventListener('click',function(){
   getInputNumber('case', 59, true)
});
document.getElementById('case-minus').addEventListener('click',function(){
   getInputNumber('case', 59, false)
});

function getInputNumber(product,price,increasing){
    const inputField = document.getElementById(product+'-total');
    let inputNumber = inputField.value;
   if(increasing){
      inputNumber = parseInt(inputNumber) + 1;
   }else if(inputNumber > 0){
      inputNumber = parseInt(inputNumber) - 1;
   }

   inputField.value = inputNumber;

   const priceField = document.getElementById(product+'-price');
   priceField.innerHTML = inputNumber * price;
  
   updateTotal();
}

function getInput(inputId){
   const inputGet = document.getElementById(inputId+'-total')
   const inputTotal = parseInt(inputGet.value);
   return inputTotal;
}

function updateTotal(){
   
   const phoneTotal = getInput('phone') * 1219;

   const caseTotal = getInput('case') * 59;

   const subTotal = phoneTotal + caseTotal;
   const tax = subTotal / 12;
   const Total = subTotal + tax;

   document.getElementById('subtotal').innerHTML = parseInt(subTotal);
   document.getElementById('tax').innerHTML = parseInt(tax);
   document.getElementById('total-price').innerHTML = parseInt(Total);
}