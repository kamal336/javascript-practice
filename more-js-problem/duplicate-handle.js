// duplicate handle
const duplicateHandle = (names) =>{
 let unique = [];
    for(let name of names){
        if(unique.indexOf (name) == -1){
            unique.push(name);
        }
    }
    return unique;
}
let names =['naim','koli','akter','naim','koli','tyab','wasim','tyab','tyab','akter','naim'];
console.log(duplicateHandle(names));


function duplicate (students){
    var uniqueStudent = [];
    for(var i = 0; i < students.length; i++){
        var element = students[i];
       if(uniqueStudent.indexOf (element) == -1){
        uniqueStudent.push(element);
       }
    }
   return uniqueStudent;
}

var students = ['naim','akter','kamal','naim','akter','naim','kamal'];
console.log(duplicate(students));