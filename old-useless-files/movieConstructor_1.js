class movie{


 constructor(name, source ){ 
this.name= name ; 
this.source = source; 

  
}


} 





 
let playlist1 = new Array(); 

let playlist2 = new Array(); 

let playlist3 = new Array(); 

let playlist4 = new Array(); 



var m1 = new movie("Dr. Strange","\../pictures/drStrange.png"); 
var m2 = new movie("Captain Marvel", "\../pictures/captain-marvel.png");
var m3 = new movie("Iron Man","\../pictures/IronMan.PNG");  
var m4 = new movie("No Way Home","\../pictures/NoWayHome.PNG");
var m5 = new movie("Stranger Things","\../pictures/StrangerThings.PNG");
// doesnt fit the row : var m6 = new movie("No Way Home","\../pictures/no way home.PNG");

var m7 = new movie("BreakingBad","\../pictures/BreakingBad.PNG"); 
var m8 = new movie("Kill Bill","\../pictures/KillBill.PNG"); 
var m9 = new movie("Black Mirror","\../pictures/BlackMirror.png"); 
var m10 = new movie("Catch Me If You Can ","\../pictures/CatchMeIfYouCan.png"); 
var m11 = new movie("Mr Robot ","\../pictures/MrRobot.png"); 

  
var m13 = new movie("The Social Network", "\../pictures/TheSocialNetwork.png") ; 
var m14 = new movie("The Theory Of Everything ", "\../pictures/TheoryOfEverything.png") ; 
var m15 = new movie("The Matrix", "\../pictures/TheMatrix.png") ; 
var m16 = new movie("Inception", "\../pictures/Inception.png") ; 
var m17 = new movie("Queens Gambit ","\../pictures/queensGambit.png");  
//var m18 = new movie("The Witcher", "\../pictures/TheWitcher.png") ; 

  
var m19 = new movie("The Office" ,"\../pictures/TheOffice.png"); 
var m20 = new movie("The Simpsons","\../pictures/TheSimpsons.png") ; 
var m21 = new movie("Community ","\../pictures/community.png"); 
var m22 = new movie("Nathan For You ","\../pictures/nathanForYouPoster.png"); 
var m23 = new movie("Friends","\../pictures/friends.png"); 




playlist1 = [m1,m2,m3,m4,m5]; 

playlist2 = [m7,m8,m9, m10,m11]; 

playlist3 = [m13,m14,m15,m16,m17]; 

playlist4 = [m19,m20,m21,m22,m23]; 

var first = document.getElementById('first');

  for(i = 0; i < playlist2.length; i++) {
	  let x = document.createElement("IMG");
	  	  x.style.visibility = "hidden" ; 

	  x.setAttribute("class","movie"); 
  x.setAttribute("src", playlist2[i].source);
  x.setAttribute("width", "200");
  x.setAttribute("height", "300");
    first.appendChild(x);
	
}


var second = document.getElementById('second'); 

for(i = 0; i < playlist1.length; i++) {
	  let x = document.createElement("IMG");
	  	  x.style.visibility = "hidden" ; 

	  x.setAttribute("class","movie"); 
  x.setAttribute("src", playlist1[i].source);
  x.setAttribute("width", "200");
  x.setAttribute("height", "300");
    second.appendChild(x);
	
}

var third = document.getElementById('third'); 

for(i = 0; i < playlist3.length; i++) {
	  let x = document.createElement("IMG");
	  	  x.style.visibility = "hidden" ; 

	  x.setAttribute("class","movie"); 
  x.setAttribute("src", playlist3[i].source);
  x.setAttribute("width", "200");
  x.setAttribute("height", "300");
    third.appendChild(x);
	
}

var fourth = document.getElementById('fourth'); 

for(i = 0; i < playlist4.length; i++) {
	  let x = document.createElement("IMG");
	  let y = document.createElement("div");
	  let z = document.createElement("div");
	 z.setAttribute("class","movieposition"); 
	  y.setAttribute("class","skeleton"); 
	  x.style.visibility = "hidden" ; 
	  x.setAttribute("class","movie"); 
	  x.setAttribute("src", playlist4[i].source);
      x.setAttribute("width", "200");
      x.setAttribute("height", "300");

    fourth.appendChild(x);
	
}


//<script type="text/javascript">

		function showposter() {
  var poster = document.getElementsByClassName('movie');
  for(i = 0; i < poster.length; i++) {
    poster[i].style.visibility = "visible";
  }
   
  
}
setTimeout("showposter()", 1650); // after 1.65 sec bc the animation is 1.5s , the poster shows up 0.15 after	
 
 
 // create a div "movei position " and image and skeleton 
 
 
 