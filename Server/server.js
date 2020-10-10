const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

const quotesData = require('./modules/quotes.js');
const { list } = require('./modules/quotes.js');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({exteded: true}))


let index = 0;

app.get('/quotes',(req,res) => {
    console.log('hi from get request');
    res.send(quotesData);
});
app.get('/randomQuotes',(req,res) => {
    let randomNumber = getRandomInt(quotesData.list.length);

    res.send(quotesData.list[randomNumber]);
});

function getRandomInt(max){
    return Math.floor(Math.random()* Math.floor(max));
}

app.post('/submitQuotes', (req,res)=>{
    console.log('hello from post',req.body);

   quotesData.list.push(req.body);
    res.sendStatus(200);

});

app.listen(port, () => {
    console.log('Up and running on port', port);
    
});

