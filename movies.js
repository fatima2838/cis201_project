class movies{ 
var name ; 
var comedy ; 
var action ; 
var drama; 
const genre = [comedy, action, drama];    

movies(){ 
} 

movies(name, comedy, action , drama ){ 
this.name = name ; 
this.comedy = comedy ; 
genre[0] = this.comedy ; 

this.action = action ; 
genre[1] = this.action ; 

this.drama = drama;
genre[2]= this.drama; 
} 






getName(){ 
return this.name ; 
} 

setName(x){
	this.name = x; 
} 
getComedy (){ 
return this.comedy; 
} 

setComedy(x) { 
this.comedy = x; 
} 

getAction(){ 
return this.action; 
} 

setAction(x){ 
this.action = x; 
} 

getDrama() { 
 return this.drama; 
} 

setDrama(x) { 
this.drama = x; 
} 
	getGenre(){ 
	return this.genre; 
	} 
	
	setGenre(x) { 
	this.genre = x; 
	} 



} 
