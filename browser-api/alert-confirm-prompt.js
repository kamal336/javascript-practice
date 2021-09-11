const addAlert =()=>{
    alert('Hi, it is a warning alert')
}

const addConfirm =()=>{
   const confirmed = confirm('Are confirm for buy this product.')
   if(confirmed){
       alert('Please payment first.')
   }
}

const addPrompt =()=>{
    prompt('Please Enter your name.')
    prompt('Please Enter your mobile no.')
}