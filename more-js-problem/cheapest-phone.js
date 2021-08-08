// get cheapest phone
const cheapestPhone =(phones)=>{
    let cheapest =  phones[0];
    for(let phone of phones){
       if (phone.price <cheapest.price) {
           cheapest = phone;
       }
    }
    return cheapest;
}

let phones = [
   {name: 'samsung', price: 29000, camera: 10,model: 'a50'},
   {name: 'iPhone', price: 46000, camera: 13,model: 's2'},
   {name: 'shaomi', price: 12000, camera: 9,model: 'n22'},
   {name: 'nokia', price: 13500, camera: 10,model: 'n59'},
   {name: 'vivo', price: 11000, camera: 8,model: 'v44'}
];

let getCheapestPhone = cheapestPhone(phones);
console.log('Cheapest phone is',getCheapestPhone);

// expensive phone price
const expensivePhone = (phones) =>{
    let expensive = phones[0];
    for(let phone of phones){
      if (phone.price > expensive.price) {
          expensive = phone;
      }
    }
    return expensive;
}

let expensivePhonePrice = expensivePhone(phones);
console.log('Expensive phone is',expensivePhonePrice);