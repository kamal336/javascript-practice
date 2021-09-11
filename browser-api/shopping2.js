const addItems = () =>{
    const inputField = document.getElementById('input-field');
    const item = inputField.value;

    // displayProduct 
    displayProduct(item);

    // addProduct
    addProduct(item);
    
    // clear input field 
    inputField.value = '';
}

const displayProduct = item =>{
    const products = document.getElementById('products');
    const li = document.createElement('li');
    li.innerHTML = item;
    products.appendChild(li);
    return item;
}

const getCart = () =>{
     const  cart = localStorage.getItem('cart');
     let cartObj;
     if(cart){
         cartObj = JSON.parse(cart);
     }else{
         cartObj = {};
     }
     return cartObj;
}

const addProduct = (item) =>{
    const cart = getCart();
    if(cart[item]){
        cart[item] = cart[item] + 1;
    }else{
        cart[item] = 1;
    }
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}

const loadCart = () =>{
    const cart = getCart();
    for(const item in cart ){
        displayProduct(item);
    }
}

loadCart();

const plaecOrder = () =>{
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}