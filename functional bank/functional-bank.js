document.getElementById('deposite-btn').addEventListener('click',function(){
    
    const depositeInput = getInput('deposite-input');

    if(depositeInput > 0){
        currentUpdate('deposite-total',depositeInput)
        updateTotal(depositeInput,true)
    }

});

document.getElementById('widthdraw-btn').addEventListener('click',function(){
       
    const withdrawInput = getInput('widthdraw-input');
    const currentBalance = currentTotalAmount();

    if(withdrawInput > 0 &&  withdrawInput < currentBalance){
        currentUpdate('widthdraw-total',withdrawInput)   
        updateTotal(withdrawInput,false)
    }else{
        alert('You have insufficient balance')
    }
});

function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat(inputFieldText);
    // clear input field 
    inputField.value = '';

    return inputAmount;
}

function currentUpdate(amountId, addTotal){

    const previusTotal = document.getElementById(amountId);
    const previusTotalText = previusTotal.innerText;
    const previusTotalAmount = parseFloat(previusTotalText);

    previusTotal.innerHTML = previusTotalAmount + addTotal;
}

function updateTotal(amount, isAdd){
    const previusBalance = document.getElementById('balance-total');
    const previusBalanceText = previusBalance.innerText;
    const previusBalanceAmount =  parseFloat(previusBalanceText);
    
    if(isAdd == true){
        previusBalance.innerText = previusBalanceAmount + amount;
    }else{
        previusBalance.innerText = previusBalanceAmount - amount; 
    }
 
}

function currentTotalAmount(){
    const previusBalance = document.getElementById('balance-total');
    const previusBalanceText = previusBalance.innerText;
    const previusBalanceAmount =  parseFloat(previusBalanceText);
    return previusBalanceAmount;
}

