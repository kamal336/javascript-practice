// using Object leteral 
const myObject = {
    name: 'kamal',
    age: 30,
    nationality: 'Bangladeshi'
}
console.log(myObject);

// new Object 
const person = new Object({name: 'Naim',age: 20});
console.log(person);

// create Object get parent value 
const childObject = Object.create(myObject);
console.log(childObject.name,childObject.age,childObject.nationality);

// class 
class Mypersonal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const Myper = new Mypersonal('Akter',33);
console.log(Myper);

// function object making system 
function Manush(nationality){
    this.nationality = nationality;
}

const man = new Manush('bangladesh')
console.log(man)

// more class 
class Student {
    
    constructor(name,age,profession){
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}

const favStudent = new Student('koli',22,'Medical Technologist');
console.log(favStudent);
