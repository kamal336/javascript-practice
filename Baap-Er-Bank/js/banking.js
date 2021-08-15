// deposite amount
document.getElementById('deposite-btn').addEventListener('click',function(){
    const inputDeposite = document.getElementById('deposite-input');
    const newDeposite = inputDeposite.value;
    
    const previusDeposite = document.getElementById('deposite');
    const previusDepositetext = previusDeposite.innerText;
    const previusDepositeAmount = parseFloat(previusDepositetext);
    const newDepositeAmount = parseFloat(newDeposite);

    const currenDepositeTotal = previusDepositeAmount + newDepositeAmount;
    
    previusDeposite.innerHTML = currenDepositeTotal;

    // update total balance
    const previusBalance = document.getElementById('total-balance');
    const previusBalanceText = previusBalance.innerText;
    const previusBalanceAmount = parseFloat(previusBalanceText);
    const totalCurrentBalance = newDepositeAmount + previusBalanceAmount;

    previusBalance.innerHTML = totalCurrentBalance;
    //  clear input field 
    inputDeposite.value = '';
})
// widthdraw amount
document.getElementById('widthdraw-btn').addEventListener('click',function(){
    const inputWidthdraw = document.getElementById('widthdraw-input');
    const newWidthdraw = inputWidthdraw.value;
    const newWidthdrawAmount = parseFloat(newWidthdraw);
    
    const previusWidthdraw = document.getElementById('widthdraw');
    const previusWidthdrawText = previusWidthdraw.innerText;
    const previusWidthdrawAmount = parseFloat(previusWidthdrawText);

    const totalWidthdrawAmount = newWidthdrawAmount + previusWidthdrawAmount;
    // total widthdraw amount
    previusWidthdraw.innerHTML = totalWidthdrawAmount;

    // updated balance after widthdraw 
    const previustotalBalance = document.getElementById('total-balance');
    const previustotalBalanceText = previustotalBalance.innerText;
    const previustototalAmount = parseFloat(previustotalBalanceText);

    const totalUpdateBalance = previustototalAmount - totalWidthdrawAmount;

    previustotalBalance.innerText = totalUpdateBalance;
    // clear input field 
    inputWidthdraw.value = '';
})