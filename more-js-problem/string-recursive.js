let country = 'akter kamal';

const stringRecursion = (country) =>{
    revarse = '';
    for(let i = 0; i < country.length; i++){
        let element = country[i];
        revarse = element + revarse;
    }
    return revarse;
}
console.log(stringRecursion(country));