const products = [
    {productName: 'Laptop', Price: 40000, id: 202},
    {productName: 'Mobile', Price: 17000 , id: 203},
    {productName: 'Microphone', Price: 900 , id: 204},
]

function eProduct (productName){
    let text = "";
    for(let i = 0; i< products.length; i++){
        const element = products[i];
        for(let property in element){
           if(property == productName && products[property] == ){
               text.push(element);
           }

        }
    }
    return element;
}
console.log(eProduct())