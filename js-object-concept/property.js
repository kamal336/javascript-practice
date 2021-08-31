// property keys, values, entities, delete, seal, freeze 
const myObject = {
    name: 'akter',
    age: 24,
    occupation: 'Web Developer'
}
console.log(myObject);

const keys = Object.keys(myObject);
console.log('The keys are',keys);

const values = Object.values(myObject);
console.log('The values are',values)

const coupleValues = Object.entries(myObject);
console.log('Pair value',coupleValues);