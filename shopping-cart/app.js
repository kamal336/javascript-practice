document.getElementById('case-plus').addEventListener('click',function(){
     updateInput('total-case', 59, true);
     
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateInput('total-case', 59,false);
    
})
function getInput(product){
    const inputField = document.getElementById(product);
    const inputTotal = parseInt(inputField.value);
         
    return inputTotal;
}
function updateInput(product,price,increasing){
     const inputField = document.getElementById(product);
     let inputTotal = inputField.value;
     if(increasing == true){
        inputTotal = parseInt(inputTotal) + 1;
     }else if(inputTotal > 0){
        inputTotal = parseInt(inputTotal) - 1;
     }

     inputField.value = inputTotal;
     const priceField = document.getElementById('case-price');

     priceField.innerText = inputTotal * price;

     totalPrice()
}

function totalPrice(){
     const casePrice = getInput('total-case') * price;
     const subTotal = casePrice;
     const tax = subTotal/10;
     const totalAmount = subTotal + tax;

     document.getElementById('subtotal').innerText = subTotal;
     document.getElementById('tax').innerText = tax;
     document.getElementById('total-price').innerText = totalAmount;
}