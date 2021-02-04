function Convoyeur(){
	for (let t = 0; t < nbConvoyeur;t++){
		x = ConvoyeurList[t][0];
		y = ConvoyeurList[t][1];
		longueur = ConvoyeurList[t][2];
		vitesse =(longueur+2*tailleCube)*CLOCK/ ConvoyeurList[t][3]/1000;
		taillecube = TailleGenerateur/2;
		
		for (let i = 0; i < max; i++){
	 		//Si pas deplacé, et cubeX entre x+longueur et x et cubeY entre y-3 et y-1
	 		if((mouvement[i] == 0) && (Positions[i][0] <= x+longueur) && (Positions[i][0] >= x-taillecube) && (Positions[i][0] != '') && (Positions[i][1]+taillecube > y-3) && (Positions[i][1]+taillecube < y-1)){
				//Deplace vers la droite
				OldPositions[i] = Positions[i];
				Positions[i] = [Positions[i][0] + vitesse, Positions[i][1]];
				//Mouvement effectué
				mouvement[i] = 1;
			}
		}
	}
}

function convoyeurSpawn(){
	for (let i = 0; i < nbConvoyeur; i++){
		//Dessine les convoyeurs
  		ctx.fillStyle = 'blue';  
 		ctx.fillRect(ConvoyeurList[i][0], ConvoyeurList[i][1], ConvoyeurList[i][2], 3);
	}
}