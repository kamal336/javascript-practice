function leafYear(year){
    if(year%4 == 0){
      return true;
    }
    return false;
}

var isLeafYear = leafYear(2000);
console.log(isLeafYear);
console.log('end');

// Multiple parameter (and operatior if two condition is true return true otherwise return false.)
const leapYear1 = (year1,year2) => {
    if (year1 % 4 == 0 && year2 % 4 == 0) {
        return true;
    }
    return false;
}

let isleapYear = leapYear1(2016,2026);
console.log('Leap year is', isleapYear);


// Or condition (if atleast one condition true return true if all condition false it return false.)

const leapYear2 = (year3,year4) =>{
    if (year3 % 4 == 0 || year4 % 4 != 0) {
        return true;
    }else{
        return false;
    }
}

let isleapYear2 = leapYear2(2020,2017);
console.log('Is leap year is ',isleapYear2)

// really leap year find out

const realLeapYear = (realyear) =>{
    if ((realyear % 4 == 0 )&& (realyear % 100 != 0) || (realyear % 400 == 0)) {
        return true;
    }else{
        return false;
    }
}

let isrealYear = realLeapYear(2100);
console.log('Is leap year is',isrealYear);