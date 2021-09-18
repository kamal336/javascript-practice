document.getElementById('deposite-btn').addEventListener('click',()=>{
    const inputValue = getInput('deposite-input');
    if(inputValue > 0){
        updateAmount (inputValue,true);
    }

});
document.getElementById('widthdraw-btn').addEventListener('click',()=>{
    const inputValue = getInput('widthdraw-input');
    if(inputValue > 0){
        updateAmount (inputValue,false);
    }

});

const getInput = (id) =>{
    const inputField = document.getElementById(id) ;
    const inputTexValue = inputField.value;
    // error handle 
    if(inputField.value === ""){
        alert('Please Enter Amount');
        return;
    }
    // clear input field 
    inputField.value = '';

    return inputTexValue;
}

const updateAmount = (inputValue,isAdd) =>{
    const depositeField = document.getElementById('deposite');
    const depositeText = parseFloat(depositeField.innerText);

    const widthdrawField = document.getElementById('widthdraw');
    const widthdrawText = parseFloat(widthdrawField.innerText);

    const totalField = document.getElementById('total-balance');
    const totalText = parseFloat(totalField.innerText);
    
    if(isAdd){
        const totalDeposite  = depositeText + parseFloat(inputValue);
        depositeField.innerHTML = totalDeposite;
        totalField.innerHTML = totalDeposite + totalText;
    }else{
        const totalWidthdraw = widthdrawText + parseFloat(inputValue);
        widthdrawField.innerHTML = totalWidthdraw;
        totalField.innerHTML =  totalText - totalWidthdraw;
    
    }
    
}