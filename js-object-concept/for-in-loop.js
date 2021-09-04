// for in loop in Object 
const person = {
    name: 'kamal',
    age: 30,
    profession: {
        designation: 'web developer',
        salary: 33000
    },
    isRich: true,
    isKoreanCitizen: false
}
console.log(person);

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

// for in loop
for(const prop in person){
    console.log(prop,person[prop])
}

// because entries return pair Array that we hava run for of loop
for(const entries of Object.entries(person)){
    console.log(entries)
}