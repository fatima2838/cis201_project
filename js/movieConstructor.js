
class movie{


 constructor(name, source ){ 
this.name= name ; 
this.source = source; 
let x = document.createElement("IMG");
  x.setAttribute("src", source);
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  function myFunction() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "img_pulpit.jpg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
}




}

}


 
 



let playlist1 = new Array(); 

let playlist2 = new Array(); 

let playlist3 = new Array(); 

let playlist4 = new Array(); 
/*
m1 = new movie("randomMovie","comedy") ; 
m2 = new movie("another randomMovie", "action") ; 
playlist1 = [m1,m2]; 
document.getElementById('b').innerHTML = playlist1[0].name; 
console.log(playlist1[0].name); 
playlist1.push(new movie("new movie", "genre")); */ 

m3 = new movie("dr strange","\../pictures/drStrange.png"); 
  document.getElementById('b').src = m3.source;



var a = 0 ; 
var b = 0 ; 
var c = 0 ; 
var d = 0 ; 

function Addscore(points) { 
points ++ ; 

} 


function question(answer){ 

if (answer== "A") {
	Addscore(a);
} 
else if (answer== "B") {
	Addscore(a);
} else if (answer== "C") {
	Addscore(c);
	
} else (answer== "D")
	Addscore(d);



} 








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
