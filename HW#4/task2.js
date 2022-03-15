import fetch from 'node-fetch';

const url = 'https://api.currencyapi.com/v3/latest?apikey=oNmgMdx5lfoa3lDDBzEFCpaE1iwwYdqKiTSdsnC1';

async function currencyConvertor(amount, currency){
    const fetchedData = await fetch(url);
    const result = await fetchedData.json(); 
    return parseFloat((amount * result.data[currency].value).toFixed(2));
}

const convertationResult = await currencyConvertor(4, 'PLN');
console.log(convertationResult);