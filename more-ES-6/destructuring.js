// destructure object
const myDetails = {
    name: 'kamal',
    age: 30,
    sex: 'male',
    occupation: 'Medical Technologist'
}

// const name = myDetails.name;
// const age = myDetails.age;
// const occupation = myDetails.occupation;

const {name,age,occupation} = myDetails;

console.log(myDetails);
console.log(name);
console.log(age);
console.log(occupation);

// declare variable based on Object preperty
const myObject = {x: 12, y:35,z: 53};
const {x,y,z} = myObject;
console.log(x,y,z);

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

console.log(myWife);
const {SSC,Diploma,Bsc} = myWife.education;
console.log(SSC,Diploma,Bsc);

const {CSCR,Metro,AlFaud} = myWife.Job;
console.log(CSCR,Metro,AlFaud);





