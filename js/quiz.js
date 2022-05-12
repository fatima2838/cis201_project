

var a = 0 ; 
var b = 0 ; 
var c = 0 ; 
var d = 0 ;

 
console.log(a); 

let ChoiceA = "A"; 
let ChoiceB = "B"; 
let ChoiceC = "C"; 
let ChoiceD = "D"; 


function question(answer){ 

if (answer== "A") {
	a++; 
console.log("a = " + a); 
function writeA(){
console.log(a);
};

} 
else if (answer== "B") {
	b++; 
	console.log("b = " + b); 
	  function writeB(){

};
writeB.staticProperty = b; 
} 
else if (answer== "C") {
	c++; 
	console.log("c = " + c); 
	 function writeC(){
console.log(c);
};
writeC.staticProperty = c; 

} else if (answer== "D"){
	d++; 
console.log("d = " + d);
 function writeD(){
console.log(d);
} ; 
}

} 


// document.getElementById("myBtn").onclick = displayDate;
/* function getScores(){
 var choiceA = document.getElementsByClassName('answerBox A');
  for(i = 0; i < choice.length; i++) {
    choiceA[i].onlcick() = question(A) ;
}

var choiceB = document.getElementsByClassName('answerBox B');
  for(i = 0; i < choice.length; i++) {
    choiceB[i].onlcick() = question(B) ;
}
var choiceC = document.getElementsByClassName('answerBox C');
  for(i = 0; i < choice.length; i++) {
    choiceC[i].onlcick() = question(C) ;
}

var choiceC = document.getElementsByClassName('answerBox D');
  for(i = 0; i < choice.length; i++) {
    choiceC[i].onlcick() = question(D) ;
}

}
*/ 


/*
var dynImages = new Array;
Image = (function (org) {
    return function () {
        var result = new org;
        dynImages.push(result);
        return result;
    };
}(Image));


var tmp = new Image();
tmp.src = 'http://www.google.de/images/srpr/logo3w.png';
document.body.appendChild(tmp);​

console.log(dynImages);
*/

