function Generateur(x,y){
	//Dessine le générateur
	ctx.drawImage(generateur, x, y);
 	NewItem();
}


//Crée un cube et enregistre ses coordonnées
var nbCube = 0;
function NewItem(){
	var x = Xgenerateur, y = Ygenerateur;
	stopgenerateur=0;
	for (let j = 0; j < nbMachine; j++){
		if(Probleme[j] == 1){
			stopgenerateur = 1;
		}
	}
	if (stopgenerateur == 0){
		for (let i = 0; i < max; i++){
		    //Dès qu'un emplacement est libre
		    if (Positions[i][0] == ''){
		        Positions[i][0] = x + 12;
		        Positions[i][1] = y + tailleCube/2;
		        nbCube++;
	           	ctx.clearRect(0, 0, 150,25);
	    		ctx.fillStyle = 'black';
		    	ctx.font = '15px sans-serif';
		    	ctx.fillText('Cubes crées : ' + nbCube, 0,20 );
		        break;
	        }
	    }
	}
	if (stopped != 1){
	    setTimeout(function(){NewItem()}, ClockGenerateur/VitesseAcceleration);
	}
}