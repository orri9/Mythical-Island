// =====
// BonusCards
// =====


/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


//shows the number of bonus cards in the bonus card deck
var numberOfBonusCards = 20;

//================
//Draws a selected number of bonus cards
//================
function makeBonusCards(cards){

	var bonus1 = new BonusCard("bonusCard1", "", 4, [["Earth","Fire"],
												["Earth","Fire"]], g_images.bonusCard1); 
	var bonus2 = new BonusCard("bonusCard2", "", 4, [["Water","Air"],
												["Water","Air"]], g_images.bonusCard2); 
	var bonus3 = new BonusCard("bonusCard3", "", 4, [["Fire","Air"],
												["Fire","Air"]], g_images.bonusCard3); 
	var bonus4 = new BonusCard("bonusCard4", "", 5, [["Air","Nlights"],
												["Air","Nlights"]], g_images.bonusCard4); 
	var bonus5 = new BonusCard("bonusCard5", "", 5, [["Earth","Nlights"],
											["Earth","Nlights"]], g_images.bonusCard5); 

	var bonus6 = new BonusCard("bonusCard6", "", 3, [["Air","Air"],
												["Air","Air"]], g_images.bonusCard6); 
	var bonus7 = new BonusCard("bonusCard7", "", 3, [["Water","Water"],
												["Water","Water"]], g_images.bonusCard7); 
	var bonus8 = new BonusCard("bonusCard8", "", 3, [["Fire","Fire"],
												["Fire","Fire"]], g_images.bonusCard8); 
	var bonus9 = new BonusCard("bonusCard9", "", 4, [["Earth","Air"],
												["Earth","Air"]], g_images.bonusCard9); 
	var bonus10 = new BonusCard("bonusCard10", "", 5, [["Water","Nlights"],
											["Water","Nlights"]], g_images.bonusCard10); 
	
	var bonus11 = new BonusCard("bonusCard11", "", 4, [["Earth","Water"],
											["Earth","Water"]], g_images.bonusCard11); 
	var bonus12 = new BonusCard("bonusCard12", "", 6, [["Nlights","Nlights"],
										["Nlights","Nlights"]], g_images.bonusCard12); 
	var bonus13 = new BonusCard("bonusCard13", "", 5, [["Water","Nlights"],
											["Nlights","Water"]], g_images.bonusCard13); 
	var bonus14 = new BonusCard("bonusCard14", "", 5, [["Fire","Nlights"],
											["Fire","Nlights"]], g_images.bonusCard14); 
	var bonus15 = new BonusCard("bonusCard15", "", 5, [["Fire","Nlights"],
											["Nlights","Fire"]], g_images.bonusCard15); 
	
	var bonus16 = new BonusCard("bonusCard16", "", 5, [["Earth","Nlights"],
											["Nlights","Earth"]], g_images.bonusCard16); 
	var bonus17 = new BonusCard("bonusCard17", "", 5, [["Air","Nlights"],
												["Nlights","Air"]], g_images.bonusCard17); 
	var bonus18 = new BonusCard("bonusCard18", "", 2, [["Water","Air"],
												["Earth","Fire"]], g_images.bonusCard18); 
	var bonus19 = new BonusCard("bonusCard19", "", 3, [["Earth","Earth"],
												["Earth","Earth"]], g_images.bonusCard19); 
	var bonus20 = new BonusCard("bonusCard20", "", 4, [["Water","Fire"],
												["Water","Fire"]], g_images.bonusCard20); 

	//Make a deck with 20 bonus point cards
	var bonusDeckState = [
					bonus1, bonus2, bonus3, bonus4, bonus5, 
					bonus6, bonus7, bonus8, bonus9, bonus10, 
					bonus11, bonus12, bonus13, bonus14, bonus15, 
					bonus16, bonus17, bonus18, bonus19, bonus20
					];


	var bonusBoardState = [];

	for (var i = 0; i < cards; i++) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfBonusCards-1));
		//add that card to the game board
		bonusBoardState[i] = bonusDeckState[randomNumber];
		//remove that card from the deck
		bonusDeckState.splice(randomNumber,1);
		numberOfBonusCards--;
		};
	    
	return bonusBoardState;
}

//Checks if the player has completed the selected bonus card
function bonusCardCheck(bonusCard, rotation, nr){
	if (rotation >= 4) {
		return;
	};
	var a = [["","","","",""],["","","","",""],["","","","",""],
					["","","","",""],["","","","",""]];


	var victory = [];
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			a[i][j]	=landBoardState[i][j].type;
		};
	};

	var b = bonusCard.array;


	outerRow:
	for (var or = 0; or <= a.length - b.length; or++) {
	    outerCol:
	    for (var oc = 0; oc <= a[or].length - b[0].length; oc++) {
	        for (var ir = 0; ir < b.length; ir++)
	            for (var ic = 0; ic < b[ir].length; ic++){
	                if (a[or + ir][oc + ic] != b[ir][ic] && b[ir][ic] != ""){
	                    continue outerCol;
	                }
	            }
	        victory = findVictoryPlaces(oc, or, b);
	    }
	}

	//finding out if the player is on the right spot and giving him points for 
	//completing his card
	for (var i = 0; i < victory.length; i++) {
		if (protectorBoardState[0].pawnPos[0] == victory[i][0] && 
			protectorBoardState[0].pawnPos[1] == victory[i][1]) {
			if (bonusCardBoardState[nr].owner != "") {
				protectorBoardState[1].points -= bonusCard.points;	
			};
			bonusCardBoardState[nr].owner = protectorBoardState[0].type;
			protectorBoardState[0].points += bonusCard.points;
			return;
		};
	}

	bonusCard.array = rotate(bonusCard.array);

	return bonusCardCheck(bonusCard, rotation + 1, nr);
}

//Searches for a bonus card for the computer and completes it if the computer
//player is standing on it
function bonusCardSearch(bonusCard, rotation, nr){
	
	if (rotation >= 4 || bonusCardBoardState[nr].owner == protectorBoardState[1].type) {
		return [];
	};

	var a = [["","","","",""],["","","","",""],["","","","",""],
					["","","","",""],["","","","",""]];

	var victory = [];
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			a[i][j]	=landBoardState[i][j].type;
		};
	};

	var b = bonusCard.array;


	outerRow:
	for (var or = 0; or <= a.length - b.length; or++) {
	    outerCol:
	    for (var oc = 0; oc <= a[or].length - b[0].length; oc++) {
	        for (var ir = 0; ir < b.length; ir++)
	            for (var ic = 0; ic < b[ir].length; ic++){
	                if (a[or + ir][oc + ic] != b[ir][ic] && b[ir][ic] != ""){
	                    continue outerCol;
	                }
	            }
	        victory = findVictoryPlaces(oc, or, b);
	    }
	}


	//finding out if the player is on the right spot and giving him points for 
	//completing his card
	for (var i = 0; i < victory.length; i++) {
		if (protectorBoardState[1].pawnPos[0] == victory[i][0] && 
			protectorBoardState[1].pawnPos[1] == victory[i][1]) {
			if (bonusCardBoardState[nr].owner != "") {
				protectorBoardState[0].points -= bonusCard.points;	
			};
			bonusCardBoardState[nr].owner = protectorBoardState[1].type;
			protectorBoardState[1].points += bonusCard.points;
			return [];
		};
	}

	if (victory.length != 0) {
		return victory;
	};

	bonusCard.array = rotate(bonusCard.array);

	return bonusCardSearch(bonusCard, rotation + 1, nr);
}

//The bonus card constructor
var BonusCard = function(name, owner, points, array, image) {
  this.name = name;
  this.owner = owner;
  this.points = points;
  this.array = array;
  this.image = image;
}
