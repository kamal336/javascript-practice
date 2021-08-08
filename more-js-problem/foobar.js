const foobar =() =>{
    for(let i = 0; i <= 50; i++){
        if(i % 3 == 0 && i % 5 == 0){
            return 'foobar';
        }else if (i % 3 == 0) {
            return 'foo';
        }else if (i % 5 == 0) {
            return 'bar';
        }else{
           return 'This not a foobar';
        }
    }
}
console.log(foobar());
