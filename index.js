/*
Jajuan Monroe
Random Quote Generator
August 2017
*/
var randQuote;

function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#quote-line").html("<p id='quote-line'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + "</p>");
        
        randQuote = response.quoteText + " ~ " + response.quoteAuthor;
      }
  });
}

function tweet(){
  
  window.open("https://twitter.com/intent/tweet?hashtags= freecodecamp&text="+encodeURIComponent(randQuote));
} 
  
$("#tweet-button").click(tweet);
  
$("#next-btn").click(function(){
  var randColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
  
  $("body").css({"background-color": randColor});
  
  randomQuote();
});