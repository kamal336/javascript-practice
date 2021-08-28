// load kanye quotes 
const loadQuotes =()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}

const displayQuotes =(quotes)=>{
    const quotesDiv = document.getElementById('quotes');
    quotesDiv.innerHTML = quotes.quote;
}