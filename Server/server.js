const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const express = require('express');

const app = express();
const port = 5000;

const quotesData= ('./modules/quotes.js');

app.use(express.static('server/public'));


let quotesData = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

let index = 0;

app.get('/quotes',(req,res) => {
    console.log('hi from get request');
    res.send(quotesData);
});
app.get('/ramdomQuotes',(req,res) => {
    console.log('hi from get request');
    res.send(quotesData);
});

app.listen(port, () => {
    console.log('Up and running on port', port);
    
});
