// break  (break is use to break code )

// for(var i = 0; i <= 10; i++){
//     if(i > 5 ){
//         break;
//     }
//     console.log(i);
// }

// continue (to continue code)

var ages = [14,44,25,17,33,42,22];

for(x = 0; x < ages.length; x++){
  var age = ages[x];
    if (age > 35) {
        continue;
    }
    console.log(ages[x]);
}

// more continue

for(count = 0; count <= 10; count++){
  if (count == 5) {
    continue;
  }else if (count == 7) {
    continue;
  }
  console.log(count);
}