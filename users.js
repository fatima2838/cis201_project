//create user objects 
class users{ 
//clalsses in java script are made with the constructor() key word 
var name ; 
var comedy ; 
var action; 
var drama ; 
const preferences  = [comedy, action, drama];      

constructor(){ } 


constructor(name, comedy, action , drama){ 
		this.name = name ; 

		this.comedy = comedy ; 
        preferences[0]= this.comedy ; 
        
        this.action = action ; 
        preferences[1]= this.action;
        
        this.drama = drama ; 
        preferences[2] = this.drama; 
        

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
	getPreferences(){ 
	return this.preferences; 
	} 
	
	setPreferences(x) { 
	this.preferences = x; 
	} 


} 
