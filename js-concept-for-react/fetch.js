// Stringify JSON data 
const person = {
    name:'akter',
    age: 30,
    position: 'MT'
}

const Stringified = JSON.stringify(person);
console.log(Stringified);

// parse data
const parseData = JSON.parse(Stringified);
console.log(parseData);

// map in array
const products = [
    {productName: 'mobile',brand: 'samsung',model: 'galaxy s10'},
    {productName: 'Laptop',brand: 'hp',model: 'core i5'},
    {productName: 'watch',brand: 'apple',model: 'iWatch30'},
    {productName: 'headphone',brand: 'lg',model: 'z443'}
]

const mapProducts = products.map(product => product);
console.log(mapProducts);

const newProduct = {productName: 'bag',brand:'asus',model: 's33'};
const addProducts = [...products,newProduct];
console.log(addProducts);

// filter method for filtering specefing product
const filtrProduct = products.filter(product => product.brand !== 'samsung')
console.log(filtrProduct)