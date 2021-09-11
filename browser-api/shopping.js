const addItems= ()=>{
  const inputField = document.getElementById('input-field');
  const item = inputField.value;
  if(!item){
      return;
  }
//   get product 
  displayProduct(item)

//   add cart 
addProductToCart(item)

// clear inputField 
  inputField.value = '';
}

const displayProduct =(item)=>{
    const addProduct = document.getElementById('products');
    const li = document.createElement('li');
    li.innerHTML = item;
    addProduct.appendChild(li);
}

const getCart =()=>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }else{
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = item =>{
  const cart = getCart();
  if(cart[item]){
    cart[item] = cart[item] + 1;
  }else{
    cart[item] = 1;
  }
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart',cartStringified)
}

const loadCart = () =>{
  const cart = getCart();
  for(const item in cart){
    displayProduct(item)
  }
}
loadCart()

const plaecOrder = () =>{
  document.getElementById('products').textContent = '';
  localStorage.removeItem('cart');

}
