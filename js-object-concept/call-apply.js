const akter = {
    name : 'kamal',
    age: 29,
    money: 14000,
    treatDey: function(treat,tips,tax){
        this.money = this.money - treat - tips - tax;
        console.log(this.money)
        return this.money;
    }
}

const naim = {
    name : 'naim',
    age: 22,
    money : 10000
}

const koli = {
    name: 'koli',
    age: 24,
    money: 20000
}

akter.treatDey(1000,100,100);

// call method 
akter.treatDey.call(naim,500,50,50);
akter.treatDey.call(koli,1500,150,50);
akter.treatDey.call(koli,500,70,30);

// apply method 
akter.treatDey.apply(naim,[700,50,50]);
akter.treatDey.apply(koli,[1300,100,100]);
akter.treatDey.apply(koli,[1000,100,100]);
