// bind method 
const myObject = {
    name: 'kamal',
    age: 30,
    salary: 13000,
    myExpense: function(expense){
        this.remain = this.salary - expense;
        console.log(this)
        return this.remain;
    },
    myName:function(name,age){
        this.name = name;
        this.age = age;
        // console.log(this.name,this.age)
        return name;
    }
}

const wifeObject = {
    name: 'koli',
    age : 24,
    salary: 16000
}

const myObj3 = {
    name: 'sahi',
    salary: 20000,
    age:23
}


myObject.myExpense(2000);

const wifeEpense = myObject.myExpense.bind(wifeObject);
const wifeName = myObject.myName.bind(wifeObject)
wifeName('koli',23)
console.log(wifeEpense(4000))

const myObject3 = myObject.myExpense.bind(myObj3);
myObject3(5900);

