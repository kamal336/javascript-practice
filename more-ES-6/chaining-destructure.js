// chaining Object 
const myWife = {
    name: 'Naim',
    age: 28,
    education:{
        SSC: 2010, 
        Diploma: 2014,
        Bsc: 2019
    },
    Job:{
        CSCR: 2014,
        Metro: 2013,
        AlFaud: 2021
    }
}


// const {CSCR} = myWife.Job;
// console.log(CSCR);
console.log(myWife?.education?.msc?.Bsc);
console.log(myWife.Job?.msc?.CSCR);
console.log(myWife?.education?.SSC);
console.log(myWife?.dsc?.education?.Diploma);

// Array destructuring
const numbers = [44,32,1,54,3,5];
const [first,second,third,fourth,fifth,sixth] = numbers;
console.log(first,second,third,fourth,fifth,sixth);
console.log(third);
console.log(first,fifth);