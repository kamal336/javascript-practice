const addProductPrice = () =>{
    const productField = document.getElementById('product');
    const product = productField.value;
    const priceField = document.getElementById('price');
    const price = priceField.value;
  
    const productSringified = JSON.stringify(product);
    const priceSringified = JSON.stringify(price);
    
   if(product && price){
    localStorage.setItem(productSringified, priceSringified )
   }
    // clear field 
    productField.value = '';
    priceField.value = '';

}