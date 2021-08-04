function leafYear(year){
    if(year%4 == 0){
      return true;
    }
    return false;
}

var isLeafYear = leafYear(2000);
console.log(isLeafYear);
console.log('end');

// Multiple parameter
const leapYear1 = (year1,year2) => {
    if (year1 % 4 == 0 && year2 % 4 == 0) {
        return true;
    }
    return false;
}

let isleapYear = leapYear1(2016,2025);
console.log(isleapYear);