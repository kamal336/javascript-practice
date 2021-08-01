// only one condition
var chickenLeg = 140;
var myBaget = 70;

if(chickenLeg < myBaget ){
    console.log("I will eat Checkenleg and Handi chabamu")
}

// two condition

if(chickenLeg < myBaget ){
    console.log("I will eat Checkenleg and Handi chabamu")
}
else{
   console.log("I will eat Smashed potato with lentil soup");
}

// condition more
var januaryDesheJabo = true;
var octoberDesheJabo = true;
var wifeMeet = true ;

if(januaryDesheJabo == octoberDesheJabo ){
    console.log("Its will my dreamable memory in my life");
}
else{
    console.log('Otherwise it will very much moment in my life');
}


if(octoberDesheJabo == januaryDesheJabo && januaryDesheJabo == wifeMeet){
    console.log('It will my pleasure')
}
else{
   console.log( 'It will be unexpectable moment')
}

console.log('the end');
// nested conditon
var visaExtend =false;
var visaNotExtend = true;

if(januaryDesheJabo == wifeMeet){
    if(visaExtend == true){
        console.log('January te deshe chotite jabo');
    }
    else if(visaNotExtend != true ){
        console.log('I will cancel marmo and will go Deshe')
    }
    else{
        console.log('January te deshe cancel kore chole jabo')
    }
}

// conditional and 
var myAge = 30;
var wifeAge = 27;
var mySister = 22;

if(myAge > wifeAge && myAge <mySister){
    console.log('Condition is true')
}
else{
    console.log('Condition is false')
}

// or condition

var x = 10;
var y = -4;

if(x > 0 || y > 0){
    console.log('This number is positive')
}
else{
    console.log('This number is negative');
}