#!/usr/bin/env node

import fetch from 'node-fetch';

function currencyConvertor(amount, currency){
    return fetch('https://api.currencyapi.com/v3/latest?apikey=oNmgMdx5lfoa3lDDBzEFCpaE1iwwYdqKiTSdsnC1')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return parseFloat((amount * res.data[currency].value).toFixed(2));
            })
}
 
currencyConvertor(40, "PLN").then(response => console.log(response));




