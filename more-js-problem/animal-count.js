// total animal count
const totalAnimal = (miles) =>{
     let firstPerMiles10 = 10;
     let secondMile10 = 50;
     let lastMiles = 100;
     if (miles <= 10) {
        let first10Miles =  firstPerMiles10*miles;
        return first10Miles;
     }else if (miles <=20) {
       let  second10Miles = 10 * firstPerMiles10;
       let secondRestMiles = miles - 10;
       let totalSecondMiles = secondRestMiles *  secondMile10;
       let secondMilesAnimal = second10Miles + totalSecondMiles;
       return secondMilesAnimal;

     }else{
       let first10 = 10 * firstPerMiles10;
       let second10 = 10 * secondMile10;
       let first20Miles = first10 + second10;
       let thirdRest = miles - 20;
       let totalThirdMiles = thirdRest * lastMiles;
       let totalRestAnimal = first20Miles + totalThirdMiles;
       return totalRestAnimal ;
     }
}

const totalAnimalCount = totalAnimal(33);
console.log('Total animal count is',totalAnimalCount);

