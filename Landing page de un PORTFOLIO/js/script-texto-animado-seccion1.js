setTimeout(function(){





var words = document.getElementsByClassName('word');      // la clase word son 35 caractares incluyendo espacios en blanco y lo guardo en la variable words
var wordArray = [];   // inicianilizo el vector a cero
var currentWord = 0;   //inicializo palabra actual a cero

words[currentWord].style.opacity = 1;  //opacidad a 1
for (var i = 0; i < words.length; i++) {     
  splitLetters(words[i]);  //le envio los 36 caractateres en forma de estructura a splitlletes
  
}
//__________________________________________________________________________

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

//================================================================================================

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}
//========================================================================================================
function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}
//========================================================================================================
function splitLetters(word) {        //recibo la palabra con sus 36 caractatres
  var content = word.innerHTML;  //modifico la clase word y la guardo en la variable content 

  word.innerHTML = '';                   //vacio la variable
  var letters = [];                   //vacio letters

  for (var i = 0; i < content.length; i++) {                       
    


    var letter = document.createElement('span');   //creo el elemento span


      
    letter.className = 'letter';
  
    letter.innerHTML = content.charAt(i);


    


  
    word.appendChild(letter);

    letters.push(letter);


  }
  

  wordArray.push(letters);
}

//====================================================================================================================
changeWord();


}, 7000); 