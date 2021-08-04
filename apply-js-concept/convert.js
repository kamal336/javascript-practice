//  convert kilometer to mile

function kmToMile(km){
     var mile = km / 1.60934;
     return mile;
}

var mileResult = kmToMile(7);
console.log('Distance of our house is',mileResult, 'mile.');

// convert mile to kilometer

function mileToKm(mile){
    var kiloMeter = mile * 1.60934;
    return kiloMeter;
}

var totalMile = mileToKm(7);
console.log('Distance from our company',totalMile,'kitometer.');

// farenhiet to celcius

function farToCelcius(far){
     var celcius = (far - 32) * 5/9;
     return celcius;
}

var celciusTem = farToCelcius(98);
console.log('Today Temperature is', celciusTem,'°C.');

// conver celcius to farenhiet

function celToFarenhiet(cel){
     let farenHiet = cel * 9/5 + 32;
     return farenHiet;
}

let farenHietTemp = celToFarenhiet(36.666666666666664);
console.log('Today is very hot. Today Temperature is',farenHietTemp,'°F')