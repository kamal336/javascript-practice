// deposite event handler 
document.getElementById('deposite-btn').addEventListener('click',function(){
    const depositeInput = document.getElementById('deposite-input');
    const newDeposite = depositeInput.value;
    const newDepositeAmount = parseFloat(newDeposite);

    const previusDeposite = document.getElementById('deposite-total');
    const previusDepositeText = previusDeposite.innerText;
    const totalDepositeAmount = parseFloat(previusDepositeText);

    const currentDepositeTotal = newDepositeAmount + totalDepositeAmount;

    previusDeposite.innerHTML = currentDepositeTotal;

    // update total amount 
    const previusTotal = document.getElementById('balance-total');
    const previusTotalText = previusTotal.innerText;
    const previusTotalAmount = parseFloat(previusTotalText);

    const currentTotalBalance = previusTotalAmount + newDepositeAmount;
    previusTotal.innerHTML = currentTotalBalance;
    // clear input field 
    depositeInput.value = '';

})

// widthdraw event handler 
document.getElementById('widthdraw-btn').addEventListener('click',function(){
    const widthdrawInput = document.getElementById('widthdraw-input');
    const newWidthdraw = widthdrawInput.value;
    const newWidthdrawAmount = parseFloat(newWidthdraw);

    const previusWidthdraw = document.getElementById('widthdraw-total');
    const previusWidthdrawText = previusWidthdraw.innerText;
    const totalWidthdrawAmount = parseFloat(previusWidthdrawText);

    const currentwidthdrawTotal = totalWidthdrawAmount + newWidthdrawAmount;

    previusWidthdraw.innerHTML = currentwidthdrawTotal;

    // update total balance
     const previusTotalBalance = document.getElementById('balance-total');
     const previusTotalBalanceText = previusTotalBalance.innerHTML;
     const previusTotalBalanceAmount = parseFloat(previusTotalBalanceText);

     const balanceAfterWidthdraw = previusTotalBalanceAmount - newWidthdrawAmount;

     previusTotalBalance.innerHTML = balanceAfterWidthdraw;

    // clear input field 
    widthdrawInput.value = '';

})