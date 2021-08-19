const friends = ['kamal','naim','jannatul','koli'];
const newFriend = [];
for(const friend of friends){
    if(friend.indexOf('naim') != -1){
      newFriend.push(friend);
    
    }
}
console.log(newFriend);
// includes of method 
const products = ['iPhone promax','samsung Headphone','hp laptop','dell Laptop','samsang phone'];
const searching = 'laptop';
const newProduct = [];
// for(const product of products){
//     if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase()) == true){
//         newProduct.push(product);
//         console.log(newProduct);
//     }
// }
//  starts with method 
// const startWord = 's'
// const matched = []
// for(const product of products){
//     if(product.toLocaleLowerCase().startsWith(startWord) == true){
//       matched.push(product);
//       console.log(matched);
//     }
// }

// ends with method 
const endsWord = 'laptop';
const endsProduct = [];

for(const product of products){
    if(product.toLocaleLowerCase().endsWith(endsWord) == true){
        endsProduct.push(product);
        console.log(endsProduct);
    }
}