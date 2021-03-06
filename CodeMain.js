let tabConvoyeur = [
	[0,0,0,0]
];

let tabMachine = [
	[0,0,0,0,0,0,0,0]
];

let tabLot = [
	[0,0,0,0,0,0]
];

let tabDecoupeur = [
    [0,0,0,0,0,0,0]
];

let tabLotDouble = [
	[0,0,0,0,0,0,0,0]
];

let tabAiguillage = [
	[0,0,0,0,0,"",0]
];


let tabDecoupeurDouble = [
    [0,0,0,0,0,0,0]
];

let tabConvoyeurButee = [
    [0,0,0,0,0,0,0,0]
];

let tabTeleporteur = [
    [0,0,0,0,0,0,0]
];



function AddLigne(RefId)
{
	var refTable = document.getElementById(RefId);

	var nouvelleLigne = refTable.insertRow(1);
	if(RefId == 'convoyeur')
	{
		for(let i = 0; i<4;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);

		  	var nouveauTexte = document.createElement("INPUT");
		  	nouveauTexte.setAttribute("type", "number");
		  	nouveauTexte.setAttribute("min", "0");
		  	nouveauTexte.setAttribute("max", "100000000");
		  	nouveauTexte.setAttribute("class", "valeurConvoyeur");
		  	nouvelleCellule.appendChild(nouveauTexte);
		}
		tabConvoyeur.unshift([0,0,0,0]);
	}else if(RefId == 'machine')
	{
		for(let i = 0; i<8;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i!=3 && i<5)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurMachine");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabMachine.unshift([0,0,0,0,0,0,0,0]);
	}else if(RefId == 'lot')
	{
		for(let i = 0; i<6;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i<3)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurLot");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabLot.unshift([0,0,0,0,0,0]);
	}else if(RefId == 'decoupeur')
	{
		for(let i = 0; i<7;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i<3 || i==6)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurDecoupeur");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabDecoupeur.unshift([0,0,0,0,0,0,0]);
	}else if(RefId == 'lotDouble')
	{
		for(let i = 0; i<8;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i<3 || i==7)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurLotDouble");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabLotDouble.unshift([0,0,0,0,0,0,0,0]);
	}else if(RefId == 'aiguillage')
	{
		for(let i = 0; i<7;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i<3 || i==5)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurAiguillage");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabAiguillage.unshift([0,0,0,0,0,0,0]);
	}else if(RefId == 'decoupeurDouble')
	{
		for(let i = 0; i<7;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i<3 || i==6)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurDecoupeurDouble");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabDecoupeurDouble.unshift([0,0,0,0,0,0,0]);
	}else if(RefId == 'convoyeurButee')
	{
		for(let i = 0; i<8;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i<6)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurConvoyeurButee");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabConvoyeurButee.unshift([0,0,0,0,0,0,0,0]);
	}else if(RefId == 'teleporteur')
	{
		for(let i = 0; i<7;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i!=3 && i<7)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurTeleporteur");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabTeleporteur.unshift([0,0,0,0,0,0,0]);
	}
	
}

function SuppLigne(RefId)
{
	document.getElementById(RefId).deleteRow(1);
	if(RefId == 'convoyeur')tabConvoyeur.shift();
	if(RefId == 'machine')tabMachine.shift();
	if(RefId == 'lot')tabLot.shift();
	if(RefId == 'decoupeur')tabDecoupeur.shift();
	if(RefId == 'lotDouble')tabLotDouble.shift();
	if(RefId == 'aiguillage')tabAiguillage.shift();
	if(RefId == 'decoupeurDouble')tabDecoupeurDouble.shift();
	if(RefId == 'convoyeurButee')tabConvoyeurButee.shift();
	if(RefId == 'teleporteur')tabTeleporteur.shift();
}

function Actualiser(RefClass)
{
	if(RefClass == 'valeurConvoyeur')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<tabConvoyeur.length*tabConvoyeur[0].length;i++)
		{
			tabConvoyeur[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=tabConvoyeur[0].length){j=0;k++;}
		}
	}
	if(RefClass == 'valeurMachine')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			if (j==3){j++;}
			tabMachine[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=5){j=0;k++;}
		}
	}
	if(RefClass == 'valeurLot')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			tabLot[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=3){j=0;k++;}
		}
	}
	if(RefClass == 'valeurDecoupeur')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			if (j==3){j=6;}
			tabDecoupeur[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=7){j=0;k++;}
		}
	}
	if(RefClass == 'valeurLotDouble')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			if (j==3){j=7;}
			tabLotDouble[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=8){j=0;k++;}
		}
	}
	if(RefClass == 'valeurAiguillage')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			if (j==3){
				j=5;
				tabAiguillage[k][j]=List[i].value;
			}
			else
			{
				tabAiguillage[k][j]=parseInt(List[i].value,10);
			} 
			j++;
			if (j>=6){j=0;k++;}
		}
	}
	if(RefClass == 'valeurDecoupeurDouble')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			if (j==3){j=6;}
			tabDecoupeurDouble[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=7){j=0;k++;}
		}
	}
	if(RefClass == 'valeurConvoyeurButee')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			tabConvoyeurButee[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=6){j=0;k++;}
		}
	}
	if(RefClass == 'valeurTeleporteur')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			if (j==3){j++;}
			tabTeleporteur[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=7){j=0;k++;}
		}
	}
	Affichage()
}

function TabList()
{
	console.log('tabConvoyeur',tabConvoyeur);
	console.log('tabMachine',tabMachine);
	console.log('tabLot',tabLot);
	console.log('tabDecoupeur',tabDecoupeur);
	console.log('tabLotDouble',tabLotDouble);
	console.log('tabAiguillage',tabAiguillage);
	console.log('tabDecoupeurDouble',tabDecoupeurDouble);
	console.log('tabConvoyeurButee',tabConvoyeurButee);
	console.log('tabTeleporteur',tabTeleporteur);
}

//gere l'affichage des machines
function Affichage()
{
	var ctx = document.getElementById('canvasMain').getContext('2d'); 

	//affiche le repere
	ctx.fillStyle = 'black';
	ctx.fillRect(5, 5, canvasMain.width-10, 4);
	ctx.fillRect(5, 5, 4, canvasMain.height-10);

	for(let i = 5; i<canvasMain.width-10;i++)
	{
		if (i%25==0)
		{

			ctx.fillStyle = 'grey';
			ctx.fillRect(i, 5, 1, canvasMain.height-10);
			ctx.fillStyle = 'black';
			if (i%100==0)
		    {
				ctx.fillRect(i, 5, 4, 10);
		        ctx.font = '12px sans-serif';
		        ctx.fillText(i, i-10, 30);
	        }else
	        {
				ctx.fillRect(i, 5, 4, 7);
	        }
		}
	}
	for(let i = 5; i<canvasMain.height-10;i++)
	{
		if (i%25==0)
		{
			ctx.fillStyle = 'grey';
			ctx.fillRect(5, i, canvasMain.width-10, 1);
			ctx.fillStyle = 'black';
	        if (i%100==0)
	        {
	        	ctx.fillRect(5, i, 10, 4);
	        	ctx.font = '12px sans-serif';
	        	ctx.fillText(i, 20, i+5);
	        }else
	        {
	        	ctx.fillRect(5, i, 7, 4);
	        }
		}
	}



	ctx.drawImage(generateur, Xgenerateur, Ygenerateur);
	for (let i = 0; i<tabConvoyeur.length;i++)
	{
		if(tabConvoyeur[i][0]!=0)
		{
			if (tabConvoyeur[i][3] < 0) {
                tps = -tabConvoyeur[i][3];
            } else tps = tabConvoyeur[i][3];
			var x = tabConvoyeur[i][0];
			var y = tabConvoyeur[i][1];
			var t = tabConvoyeur[i][2];
			ctx.fillStyle = 'black';
			ctx.strokeStyle = 'black';
	        ctx.fillRect(x, y, t, 3);
	        ctx.fillRect(x, y + 5, t, 3);
	        ctx.lineWidth = 2;
	        ctx.beginPath();
	        ctx.arc(x + 1, y + 4, 3, Math.PI / 2, 1.5 * Math.PI, false);
	        ctx.stroke();
	        ctx.beginPath();
	        ctx.arc(x + t - 1, y + 4, 3, Math.PI * 1.5, Math.PI / 2, false);
	        ctx.stroke();
	        ctx.font = '12px sans-serif';
	        ctx.fillText('Temps : ' +  tps + 's', x, y + 20);
		}
	}
	for (let i = 0; i<tabMachine.length;i++)
	{
		if(tabMachine[i][0]!=0)
		{
			ctx.drawImage(machine0, tabMachine[i][0], tabMachine[i][1]);
	    	ctx.fillStyle = 'white';
		    ctx.font = '15px sans-serif';
		    ctx.fillText('Ouvrier : ' + tabMachine[i][5] + '/' + tabMachine[i][4], tabMachine[i][0] + 15, tabMachine[i][1] + 20);
		    ctx.fillText('Vitesse : ' + tabMachine[i][2] + 's', tabMachine[i][0] + 15, tabMachine[i][1] + 35);
		    ctx.fillText('Stock : ' + tabMachine[i][3], tabMachine[i][0] + 15, tabMachine[i][1] + 50);
		}
	}
	for (let i = 0; i<tabLot.length;i++)
	{
		if(tabLot[i][0]!=0)
		{
			ctx.drawImage(lot, tabLot[i][0], tabLot[i][1]);
	    	ctx.fillStyle = 'black';
		    ctx.font = '15px sans-serif';
		    ctx.fillText('Taille : ' + tabLot[i][2], tabLot[i][0] + 5, tabLot[i][1] + 20);
		    ctx.fillText('Stock : ' + tabLot[i][3], tabLot[i][0] + 5, tabLot[i][1] + 35);
		    ctx.fillText('Lots : ' + tabLot[i][5], tabLot[i][0] + 5, tabLot[i][1] + 50);
		}
	}
	for (let i = 0; i<tabDecoupeur.length;i++)
	{
		if(tabDecoupeur[i][0]!=0)
		{
			ctx.drawImage(decoupeur, tabDecoupeur[i][0], tabDecoupeur[i][1]);
	    	ctx.fillStyle = 'black';
		    ctx.font = '14px sans-serif';
		    ctx.fillText('Taille : ' + tabDecoupeur[i][2], tabDecoupeur[i][0] + 5, tabDecoupeur[i][1] + 20);
		    ctx.fillText('Vitesse : ' + tabDecoupeur[i][6] + 's', tabDecoupeur[i][0] + 5, tabDecoupeur[i][1] + 35);
		    ctx.fillText('Decoupés : ' + tabDecoupeur[i][5], tabDecoupeur[i][0] + 5, tabDecoupeur[i][1] + 50);
		}
	}
	for (let i = 0; i<tabLotDouble.length;i++)
	{
		if(tabLotDouble[i][0]!=0)
		{
			ctx.drawImage(lot, tabLotDouble[i][0], tabLotDouble[i][1]);
      		ctx.fillStyle = 'black';
	        ctx.font = '15px sans-serif';
	        ctx.fillText('Taille : ' + tabLotDouble[i][2] + ' & ' + tabLotDouble[i][7], tabLotDouble[i][0] + 5, tabLotDouble[i][1] + 20);
	        ctx.fillText('Stock 1 : ' + tabLotDouble[i][3], tabLotDouble[i][0] + 5, tabLotDouble[i][1] + 35);
	        ctx.fillText('Stock 2 : ' + tabLotDouble[i][6], tabLotDouble[i][0] + 5, tabLotDouble[i][1] + 50);
	        ctx.fillText('Lots : ' + tabLotDouble[i][5], tabLotDouble[i][0] + 5, tabLotDouble[i][1] + 65);
		}
	}
	for (let i = 0; i<tabAiguillage.length;i++)
	{
		if(tabAiguillage[i][0]!=0)
		{
			let tailleAiguillage = 50;
			cycle = tabAiguillage[i][5];
			//Dessine les aiguillages
			//Dessine le haut des aiguillages
			ctx.fillStyle = 'DodgerBlue';  
			ctx.strokeStyle = 'DodgerBlue';
	 		ctx.fillRect(tabAiguillage[i][0], tabAiguillage[i][1], tailleAiguillage, 3);
	 		ctx.fillRect(tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] + tailleAiguillage, tailleAiguillage, 3);
	 		ctx.fillRect(tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] - tailleAiguillage, tailleAiguillage, 3);

	 		//Dessine le bas des aiguillages
	 		ctx.fillRect(tabAiguillage[i][0], tabAiguillage[i][1] + 5, tailleAiguillage, 3);
	 		ctx.fillRect(tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] + 5  + tailleAiguillage, tailleAiguillage, 3);
	 		ctx.fillRect(tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] + 5  - tailleAiguillage, tailleAiguillage, 3);
	 		ctx.lineWidth = 2;
	 		
	 		//Dessine les arrondis de la première partie de l'aiguillage
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + 1, tabAiguillage[i][1] + 4, 3, Math.PI/2, 1.5*Math.PI, false);
	 		ctx.stroke();  
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + tailleAiguillage - 1,  tabAiguillage[i][1] + 4, 3, Math.PI*1.5, Math.PI/2, false);
	 		ctx.stroke();  

	 		//Dessine les arrondis de l'aiguillage haut
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + 1 + tailleAiguillage, tabAiguillage[i][1] + 4 + tailleAiguillage, 3, Math.PI/2, 1.5*Math.PI, false);
	 		ctx.stroke();  
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + tailleAiguillage * 2 - 1,  tabAiguillage[i][1] + 4 + tailleAiguillage, 3, Math.PI*1.5, Math.PI/2, false);
	 		ctx.stroke(); 

	 		//Dessine les arrondis de l'aiguillage bas
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + 1 + tailleAiguillage, tabAiguillage[i][1] + 4 - tailleAiguillage, 3, Math.PI/2, 1.5*Math.PI, false);
	 		ctx.stroke();  
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + tailleAiguillage * 2 - 1,  tabAiguillage[i][1] + 4 - tailleAiguillage, 3, Math.PI*1.5, Math.PI/2, false);
	 		ctx.stroke();
	 		
	 		//Dessine les infos
		    ctx.fillStyle = 'black';
		    ctx.font = '15px sans-serif';
		    ctx.fillText(cycle, tabAiguillage[i][0] + 2, tabAiguillage[i][1] + 20);
		    ctx.fillText('0', tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] + 3 * tailleAiguillage/2);
		    ctx.fillText('1', tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] - tailleAiguillage/2);
		}
	}
	for (let i = 0; i<tabDecoupeurDouble.length;i++)
	{
		if(tabDecoupeurDouble[i][0]!=0)
		{
			ctx.drawImage(decoupeurdouble, tabDecoupeurDouble[i][0], tabDecoupeurDouble[i][1]);
	    	ctx.fillStyle = 'black';
		    ctx.font = '14px sans-serif';
		    ctx.fillText('Taille : ' + tabDecoupeurDouble[i][2], tabDecoupeurDouble[i][0] + 5, tabDecoupeurDouble[i][1] + 20);
		    ctx.fillText('Vitesse : ' + tabDecoupeurDouble[i][6] + 's', tabDecoupeurDouble[i][0] + 5, tabDecoupeurDouble[i][1] + 35);
		    ctx.fillText('Decoupés : ' + tabDecoupeurDouble[i][5], tabDecoupeurDouble[i][0] + 5, tabDecoupeurDouble[i][1] + 50);
		}
	}
	for (let i = 0; i<tabConvoyeurButee.length;i++)
	{
		if(tabConvoyeurButee[i][0]!=0)
		{
			if (tabConvoyeurButee[i][3] < 0) {
                tps = -tabConvoyeurButee[i][3];
            } else tps = tabConvoyeurButee[i][3];
            //Dessine les convoyeurs
            ctx.fillStyle = 'black';
            ctx.strokeStyle = 'black';
            ctx.fillRect(tabConvoyeurButee[i][0], tabConvoyeurButee[i][1], tabConvoyeurButee[i][2], 3);
            ctx.fillRect(tabConvoyeurButee[i][0], tabConvoyeurButee[i][1] + 5, tabConvoyeurButee[i][2], 3);
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(tabConvoyeurButee[i][0] + 1, tabConvoyeurButee[i][1] + 4, 3, Math.PI / 2, 1.5 * Math.PI, false);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(tabConvoyeurButee[i][0] + tabConvoyeurButee[i][2] - 1, tabConvoyeurButee[i][1] + 4, 3, Math.PI * 1.5, Math.PI / 2, false);
            ctx.stroke();
			ctx.fillStyle = 'red';
            ctx.fillRect(tabConvoyeurButee[i][0]+tabConvoyeurButee[i][2]/2, tabConvoyeurButee[i][1], 2, 5);
			ctx.fillStyle = 'black';
            ctx.font = '12px sans-serif';
            ctx.fillText('Temps : ' + tps + 's', tabConvoyeurButee[i][0], tabConvoyeurButee[i][1] + 20);
			ctx.fillStyle = 'green';
            ctx.fillText(tabConvoyeurButee[i][4] + 's', tabConvoyeurButee[i][0] + 78, tabConvoyeurButee[i][1] + 20);
            ctx.fillStyle = 'black';
            ctx.fillText('/', tabConvoyeurButee[i][0] + 103, tabConvoyeurButee[i][1] + 20);
            ctx.fillStyle = 'red';
            ctx.fillText(tabConvoyeurButee[i][5] + 's', tabConvoyeurButee[i][0] + 109, tabConvoyeurButee[i][1] + 20);
		}
	}
	for (let i = 0; i<tabTeleporteur.length;i++)
	{
		if(tabTeleporteur[i][0]!=0)
		{
            //Dessine les téléporteurs
            ctx.drawImage(teleporteur, tabTeleporteur[i][0], tabTeleporteur[i][1]);
	    	ctx.fillStyle = 'white';
		    ctx.font = '17px sans-serif';
		    ctx.fillText(tabTeleporteur[i][4], tabTeleporteur[i][0] + 8, tabTeleporteur[i][1] + 19);
			ctx.fillStyle = 'black';
		    ctx.font = '12px sans-serif';
		    if(tabTeleporteur[i][5] != 0){
                ctx.fillText('Vers : ' + tabTeleporteur[i][5], tabTeleporteur[i][0] - 5, tabTeleporteur[i][1] - 5);
            }
			if(tabTeleporteur[i][6] == 1){
				ctx.fillText('Pose a droite', tabTeleporteur[i][0] - 5, tabTeleporteur[i][1] - 15);
			} else if (tabTeleporteur[i][6] == 2){
				ctx.fillText('Pose a gauche', tabTeleporteur[i][0] - 5, tabTeleporteur[i][1] - 15);
			}
		}
	}
}


function AlertValeur()
{
	preset = [tabConvoyeur, tabMachine, tabLot, tabLotDouble, tabDecoupeur, tabDecoupeurDouble, tabAiguillage, tabConvoyeurButee, tabTeleporteur];
	for (let i=0; i < preset.length;i++)
	{
		for (let j=0; j < preset[i].length;j++)
		{
			if(preset[i][j][0]==0 && preset[i][j][1]==0)
			{
				if (i==0)preset[i][j] = [null, null, null, null];
				else if (i==1)preset[i][j] = [null, null, null, null, null, null, null, null];
				else if (i==2)preset[i][j] = [null, null, null, null, null, null];
				else if (i==3)preset[i][j] = [null, null, null, null, null, null, null, null];
				else if (i==4)preset[i][j] = [null, null, null, null, null, null, null];
				else if (i==5)preset[i][j] = [null, null, null, null, null, null, null];
				else if (i==6)preset[i][j] = [null, null, null, null, null, null, null];
				else if (i==7)preset[i][j] = [null, null, null, null, null, null, null, null];
				else if (i==8)preset[i][j] = [null, null, null, null, null, null, null];
			}
		}

		if (i==8)//teleporteur
		{
			for (let j=0; j < preset[i].length;j++)
			{
				if(preset[i][j][2]==0) preset[i][j][2]=null;
				if(preset[i][j][5]==0) preset[i][j][5]=null;
				if(preset[i][j][6]==0) preset[i][j][6]=null;
			}
		}
	}
	alert(JSON.stringify(preset, new String('patate')));
}

function InputValeur()
{
	ValueText = document.getElementById('tableau').value;
	preset5 = JSON.parse(ValueText);
	console.log(preset5);
	Preset(4);
}












//IMAGES
var cube = new Image();
cube.src = "img/cube.png";

var machine0 = new Image();
machine0.src = "img/machine0.png";

var generateur = new Image();
generateur.src = "img/generateur.png";

var lot = new Image();
lot.src = "img/lot.png";

var lotdouble = new Image();
lotdouble.src = "img/lotdouble.png";

var decoupeur = new Image();
decoupeur.src = "img/decoupeur.png";

var decoupeurdouble = new Image();
decoupeurdouble.src = "img/decoupeurdouble.png";

var teleporteur = new Image();
teleporteur.src = "img/teleporteur.png";

var Xgenerateur = 0, Ygenerateur = 100;