
console.log('Hello from JS');
$(document).ready(onReady);

function onReady() {
    console.log('hello from jquery');
    getQuotes();
    $('#submit').on('click',submitQuote)
    
    
}
function submitQuote() {
    let quote = $('#quote').val();
    let author= $('#author').val();
    console.log('clicked',quote,author);
    $.ajax({
        method:'POST',
        url:'/submitQuotes',
        data:{
            quote: quote,
            author: author,
        }
    }).then(function(response){
        console.log('response',response);
        getQuotes();
    }).catch(function(error){
        alert(error);
    });

        
        
    
}



function getQuotes(){
    console.log('get the quote');
    $.ajax({
        method: 'GET',
        url:'/quotes'
    }).then(function(response){
        console.log('response',response);
        appendToDom(response);
    });
    
}


function appendToDom(dataToAppend){
    $('#output').empty();
    for(let i =0; i<dataToAppend.length; i++)

    $('#output').append(`
    <p> ${dataToAppend[i].quote}</p>
    <i>from: ${dataToAppend[i].author}`)
}