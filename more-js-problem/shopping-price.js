const shoppingPrice =(products)=>{
    let prices = 0;
    for(let product of products){
       prices = prices + product.price;
    }
    return prices;
}

const products = [
    {name : 'phone',price: 34400,quantity: 1},
    {name : 't-shirt',price: 570,quantity: 3},
    {name : 'shoes',price: 1200,quantity: 1},
    {name : 'headphone',price: 344,quantity: 1},
    {name : 'watch',price: 990,quantity: 1}
];

let totalShoppingPrice = shoppingPrice(products);
console.log('Total shopping price is',totalShoppingPrice);