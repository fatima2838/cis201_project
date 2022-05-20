  var x = document.getElementById("theform"); 
	  
	  function done(){ 
	  
	   document.getElementById("u").innerHTML= document.getElementById("usernameform").value;
	   document.getElementById("n").innerHTML= document.getElementById("nameform").value;
	    document.getElementById("g").innerHTML = document.getElementById("genreform").value ; 
	
	  x.style.visibility = "hidden"; 
	  
	  
	  } 
	 
	 
	 
	  function showform(){ 

	  document.getElementById("usernameform").defaultValue = document.getElementById("u").innerHTML ; 
	  document.getElementById("nameform").defaultValue = document.getElementById("n").innerHTML ; 
	  document.getElementById("genreform").defaultValue = document.getElementById("g").innerHTML ; 
	
	
	  x.style.visibility = "visible"; } 