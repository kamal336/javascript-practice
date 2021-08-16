document.getElementById('deposite-btn').addEventListener('click',function(){  
    const depositeInput = getInput('deposite-input');
    if(depositeInput > 0){
        updateInput('deposite-total',depositeInput);
        updateTotalBalance(depositeInput, true);
    }


});

document.getElementById('widthdraw-btn').addEventListener('click',function(){
  const withdrawInput = getInput('widthdraw-input');
  const currentAmount = currentBalance();

  if(withdrawInput > 0 && withdrawInput < currentAmount){
    updateInput('widthdraw-total',withdrawInput)
    updateTotalBalance(withdrawInput, false)
  }
 
});

function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat(inputFieldText);
    // clearing input field 
    inputField.value = '';
    return inputAmount
}

function updateInput(amountId,inputTotal){
    const previusTotal = document.getElementById(amountId);
    const previusTotalText = previusTotal.innerText;
    const previusAmount = parseFloat(previusTotalText);

    previusTotal.innerHTML = previusAmount + inputTotal;
}

function updateTotalBalance(amount, isAddition){
    const totalAmount = document.getElementById('balance-total');
    const totalAmountText = totalAmount.innerHTML;
    const totalBalanceAmount = parseFloat(totalAmountText);
 
    if(isAddition == true){
        totalAmount.innerHTML = totalBalanceAmount + amount;
    }else{
        totalAmount.innerHTML = totalBalanceAmount - amount;
    }
    
}

function currentBalance(){
    const totalAmount = document.getElementById('balance-total');
    const totalAmountText = totalAmount.innerHTML;
    const totalBalanceAmount = parseFloat(totalAmountText);

    return totalBalanceAmount;
}