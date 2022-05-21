





 
// creating playlists 


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

// 1: super hero movie , 2: crime , 3: nerd movies , 4 : comedy/sitcoms 




playlist1 = [m1,m2,m3,m4,m5]; 

playlist2 = [m7,m8,m9, m10,m11]; 

playlist3 = [m13,m14,m15,m16,m17]; 

playlist4 = [m19,m20,m21,m22,m23]; 


const score = Math.floor(Math.random()*5); 
 console.log(score); 
 
 
 var playlists = new Array(); 
 
 var playlistname = new Array(); 
 

if (score == 1 ) {
	playlists = [playlist1,playlist2,playlist3,playlist4]; 
	playlistname = ["super hero movies" ,"crime" , "nerd movies "," comedy/sitcoms"] ; 
	
	
} else if( score == 2 ) { 

    playlists = [playlist2,playlist1,playlist3,playlist4]; 
	playlistname = ["crime", "super hero movies" , "nerd movies "," comedy/sitcoms"];  
}
	
	else if (score == 3) {
	
	playlists = [playlist1,playlist3,playlist4,playlist2]; 
	
	playlistname = ["super hero movies" , "nerd movies ", " comedy/sitcoms", "crime"]; 
	

}else if (score == 4) {
	playlists = [playlist4,playlist2,playlist3,playlist1]; 
	playlistname = [" comedy/sitcoms","crime" ,"nerd movies ","super hero movies"]; 
} 
else{
	playlists = [playlist4,playlist3,playlist2,playlist1]; 
	playlistname = [" comedy/sitcoms", "nerd movies ", "crime","super hero movies"]; 
}
	
	
	
	var label = document.getElementsByClassName('playlistname'); 
	for(i = 0; i < label.length; i++) {
	label[i].innerHTML = playlistname[i]; } 
	


	var moviebox = document.getElementsByClassName("movieBox") ; 
	
	for (i=0 ; i<moviebox.length ; i++){ 
	let movierow = document.createElement("DIV"); 
	movierow.setAttribute("class","row"); 
	 moviebox[i].appendChild(movierow); 
	 
	for (j = 0 ; j<5 ; j++){
	let pos = document.createElement("Div"); 
	pos.setAttribute("class","col-md movieposition"); 
	movierow.appendChild(pos); 
	
	let s = document.createElement("Div"); 
	s.setAttribute("class","skeleton"); 
	
	 let x = document.createElement("IMG");
	  	  x.style.visibility = "hidden" ; 
	  x.setAttribute("class","movie"); 
      x.setAttribute("src", playlists[i][j].source);
      x.setAttribute("width", "200");
      x.setAttribute("height", "300");
  
	let p = document.createElement("IMG"); 
	p.setAttribute("class", "playbutton"); 
	 p.setAttribute("src", "\../pictures/button.png");
    pos.appendChild(x);
	pos.appendChild(s); 
	pos.appendChild(p); 	

		}
		
	} 
 

// one for-loop for all rows of content  :) 

	//var moviebox = document.getElementsByClassName('movieBox');
	/* temporARILY commenting this 

		
			for(j = 0; j < 5; j++) {
				
	  let x = document.createElement("IMG");
	  	  x.style.visibility = "hidden" ; 

	  x.setAttribute("class","movie"); 
  x.setAttribute("src", playlists[i][j].source);
  x.setAttribute("width", "200");
  x.setAttribute("height", "300");
    moviebox[i].appendChild(x);
	
}
  }
*/ 

//this is the old method where every row had its own for loop 	
/* 
var first = document.getElementById('first');

  for(i = 0; i < playlist1.length; i++) {
	  let x = document.createElement("IMG");
	  	  x.style.visibility = "hidden" ; 

	  x.setAttribute("class","movie"); 
  x.setAttribute("src", playlist1[i].source);
  x.setAttribute("width", "200");
  x.setAttribute("height", "300");
    first.appendChild(x);
	
}


var second = document.getElementById('second'); 

for(i = 0; i < playlist2.length; i++) {
	  let x = document.createElement("IMG");
	  	  x.style.visibility = "hidden" ; 

	  x.setAttribute("class","movie"); 
  x.setAttribute("src", playlist2[i].source);
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
	 
	 
	  x.setAttribute("class","movie"); 
	  x.setAttribute("src", playlist4[i].source);
      x.setAttribute("width", "200");
      x.setAttribute("height", "300");

    fourth.appendChild(x);
	
}
*/

//<script type="text/javascript">

		function showposter() {
  var poster = document.getElementsByClassName('movie');
  for(i = 0; i < poster.length; i++) {
    poster[i].style.visibility = "visible";
  }
   
  
}
setTimeout("showposter()", 1650); // after 1.65 sec bc the animation is 1.5s , the poster shows up 0.15 after	
 
 
 
 // scale 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
	// if u want something to work onload invoke the function after the definition 
	//</script> 

/*
playlist1 = [m1,m2,m3]; 
document.getElementById('b').innerHTML = playlist1[0].name; 
console.log(playlist1[0].name); 
playlist1.push(new movie("new movie", "genre")); */ 


 // document.getElementById('b').src = m3.source;


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
