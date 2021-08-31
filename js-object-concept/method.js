const myObject = {
    name: 'kamal',
    age: 33,
    salary: 23000,
    language: ['bangla','korean','english','hindi'],
    wife:{
        name: 'naim',
        age: 22,
        salary: 18000,
    },
    myLove:function(){
        console.log('My wife name is ' + this.wife.name)
    },
    familyCost:function(necesary){
      this.salary = this.salary - necesary;
      return this.salary;
    }
}

myObject.myLove('koli');
console.log(myObject.familyCost(3000));
console.log(myObject.familyCost(2220));