// =====
// MythicalCards
// =====


/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


//Number of mythical cards in the mythical cards deck
var numberOfMytCards = 28;

//What mythical cards each computer player has
var player2MytHand = [];
var player3MytHand = [];
var player4MytHand = [];

//Shows the state of the mythical cards deck
var mytDeckState = [];

//Shows the state of the mythical discard pile
var mytDiscard = [];

//Shows what mythical cards the player has completed
var mytComplete = [];

//Shows what mythical cards the computer has completed
var mytComputerComplete = [];

//Shows what cards the user has selected
var leftMyt = false;
var middleMyt = false;
var rightMyt = false;

//===================
//Draws a hand of mythical cards for 2 players
//===================
function makeMytHand(){

	//First we define the mythical cards by giving them a name, type, points they give,
	//an array showing what you need to complete them and their image.
	var air1 = new MythicalCard("airCard1", "Air", 3, [["Air","Air","Air"]],
	 g_images.airCard1); 
	var air2 = new MythicalCard("airCard2", "Air", 5, [["Air", "","Air",""],
		["","Air","","Nlights"]], g_images.airCard2); 
	var air3 = new MythicalCard("airCard3", "Air", 4, [["Air", "", "","Air"],
		["","Air","Air",""]], g_images.airCard3); 
	var air4 = new MythicalCard("airCard4", "Air", 8, [["", "","Air"],
		["Air","Nlights","Air"],[ "","Air","Air"]], g_images.airCard4);
	var air5 = new MythicalCard("airCard5", "Air", 4, [["Air", "","Air"],
		[ "","Air",""],[ "", "","Air"]], g_images.airCard5);
	var air6 = new MythicalCard("airCard6", "Air", 3, [["Air", "", ""],
		[ "","Air","Air"]], g_images.airCard6);
	var air7 = new MythicalCard("airCard7", "Air", 6, [[ "", "","Air","Air"],
		["Air","Nlights","Air",""]], g_images.airCard7);

	var earth1 = new MythicalCard("earthCard8", "Earth", 3, [[ "","Earth", "", ""],
		["Earth", "", "","Earth"]], g_images.earthCard1);
	var earth2 = new MythicalCard("earthCard9", "Earth", 5, [[ "", "", "","Earth"],
		["Nlights","Earth", "","Earth"]], g_images.earthCard2);
	var earth3 = new MythicalCard("earthCard10", "Earth", 4, [[ "","Earth","" ],
		["Earth","Earth","Earth"]], g_images.earthCard3);
	var earth4 = new MythicalCard("earthCard11", "Earth", 4, [["Earth", "", "","Earth"],
		["Earth", "","Earth", ""]], g_images.earthCard4);
	var earth5 = new MythicalCard("earthCard12", "Earth", 6, [[ "","Earth", "","Earth"],
		["Earth","Nlights","Earth", ""]], g_images.earthCard5);
	var earth6 = new MythicalCard("earthCard13", "Earth", 3, 
		[["Earth","Earth", "","Earth"]],g_images.earthCard6);
	var earth7 = new MythicalCard("earthCard14", "Earth", 8, [[ "","Earth","Nlights"],
		["Earth", "","Earth"],["Earth","Earth", ""]], g_images.earthCard7);

	var fire1 = new MythicalCard("fireCard15", "Fire", 3, [["Fire", "","Fire"],
		["Fire", "", ""]], g_images.fireCard1);
	var fire2 = new MythicalCard("fireCard16", "Fire", 4, [["Fire","Fire"],
		["Fire","Fire"]], g_images.fireCard2);
	var fire3 = new MythicalCard("fireCard17", "Fire", 4, [[ "","Fire", "", ""],
		["Fire", "","Fire","Fire"]], g_images.fireCard3);
	var fire4 = new MythicalCard("fireCard18", "Fire", 6, [["Fire", "","Nlights","Fire"],
		[ "","Fire", "","Fire"]], g_images.fireCard4);
	var fire5 = new MythicalCard("fireCard19", "Fire", 5, [["Fire","Fire","Nlights"],
		["Fire", "", ""]], g_images.fireCard5);
	var fire6 = new MythicalCard("fireCard20", "Fire", 3, [["Fire","Fire", "", ""],
		[ "", "", "","Fire"]], g_images.fireCard6);
	var fire7 = new MythicalCard("fireCard21", "Fire", 8, [["" ,"Fire","Fire", ""],
		["Fire", "", "","Nlights"],[ "","Fire","Fire", ""]], g_images.fireCard7);

	var water1 = new MythicalCard("waterCard22", "Water", 3, [["Water","" ],
		["Water","Water"]], g_images.waterCard1);
	var water2 = new MythicalCard("waterCard23", "Water", 4, [[ "","Water","Water"],
		["Water", "","Water"]], g_images.waterCard2);
	var water3 = new MythicalCard("waterCard24", "Water", 4, [["Water", "", "", ""],
		[ "","Water","Water","Water"]], g_images.waterCard3);
	var water4 = new MythicalCard("waterCard25", "Water", 6, [[ "","Water","Water","" ],
		["Water", "","Nlights","Water"]], g_images.waterCard4);
	var water5 = new MythicalCard("waterCard26", "Water", 5, [[ "","Nlights","Water"],
		["Water","Water", ""]], g_images.waterCard5);
	var water6 = new MythicalCard("waterCard27", "Water", 3, [["Water", "","Water"],
		[ "","Water","" ]], g_images.waterCard6);
	var water7 = new MythicalCard("waterCard28", "Water", 8, [[ "","Nlights","" ,"" ],
		["Water", "","Water","Water"],[ "","Water","Water","" ]], g_images.waterCard7);


	mytDeckState = [
        air1, air2, air3, air4, air5, air6, air7,
        earth1, earth2, earth3, earth4, earth5, earth6, earth7,
        fire1, fire2, fire3, fire4, fire5, fire6, fire7, 
        water1, water2, water3, water4, water5, water6, water7 
        ];

	var mytHandState = [];

	for (var i = 0; i < 3; i++) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfMytCards-1));
		//add that card to the game board
		mytHandState[i] = mytDeckState[randomNumber];
		//remove that card from the deck
		mytDeckState.splice(randomNumber, 1);
		numberOfMytCards--;
		if (numberOfMytCards <= 0) {
			shuffleMytDiscard();
		};
	};

	for (var i = 0; i < 3; i++) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfMytCards-1));
		//add that card to the game board
		player2MytHand[i] = mytDeckState[randomNumber];
		//remove that card from the deck
		mytDeckState.splice(randomNumber, 1);
		numberOfMytCards--;
		if (numberOfMytCards <= 0) {
			shuffleMytDiscard();
		};
	};


	return mytHandState;

}

//Draws the mythical card deck, dicard pile, user completed cards
// and how many points the user has gotten so far.
function makeMytCardDeck(){

	for (var i = 0; ((i < numberOfMytCards) && (i < 5)); i++) {

		ctx.drawImage(g_images.mytCardBack, 15+(i*2), 175+(i*2), 100, 150)
	};
	for (var i = 0; i < mytDiscard.length; i++) {

		ctx.drawImage(mytDiscard[i].image, 130+(i*2), 175+(i*2), 100, 150)
	};
	for (var i = 0; i < mytComplete.length; i++) {

		ctx.drawImage(mytComplete[i].image, 300, 540-(i*20), 100, 150)
	};
	for (var i = 0; i < mytComputerComplete.length; i++) {
		ctx.drawImage(mytComputerComplete[i].image, 300 - (i*20), 25, 90, 135)
	};
	ctx.font = "20px bold Arial";
	ctx.fillText("Your Current Score:" + protectorBoardState[0].points,20,420);
	ctx.font = "20px bold Arial";
	ctx.fillText("Opponent Current Score: " + protectorBoardState[1].points + 
	" and he has completed: " + mytComputerComplete.length + " Mythical cards",390,40);
}

//Draws new mythical cards for the player and discards his selected ones
function drawMyt(){
	if (leftMyt == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfMytCards-1));
		addToDiscard(mytHandState[0]);
		//add that card to the game board
		mytHandState[0] = mytDeckState[randomNumber];
		//remove that card from the deck
		mytDeckState.splice(randomNumber, 1);
		numberOfMytCards--;
		if (numberOfMytCards <= 0) {
			shuffleMytDiscard();
		};
	};
	if (middleMyt == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfMytCards-1));
		addToDiscard(mytHandState[1]);
		//add that card to the game board
		mytHandState[1] = mytDeckState[randomNumber];
		//remove that card from the deck
		mytDeckState.splice(randomNumber, 1);
		numberOfMytCards--;
		if (numberOfMytCards <= 0) {
			shuffleMytDiscard();
		};
	};
	if (rightMyt == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfMytCards-1));
		addToDiscard(mytHandState[2]);
		//add that card to the game board
		mytHandState[2] = mytDeckState[randomNumber];
		//remove that card from the deck
		mytDeckState.splice(randomNumber, 1);
		numberOfMytCards--;
		if (numberOfMytCards <= 0) {
			shuffleMytDiscard();
		};
	};
}

//draws mythical cards in the players hand and which he has selected
function drawMytHand(){
	if (leftMyt==false){
		ctx.drawImage(mytHandState[0].image, 450, 450, 150, 225);
	} else{
		ctx.drawImage(mytHandState[0].image, 450, 440, 170, 255);
	}
	if (middleMyt==false){
		ctx.drawImage(mytHandState[1].image, 625, 450, 150, 225);
	} else{
		ctx.drawImage(mytHandState[1].image, 625, 440, 170, 255);
	}
	if (rightMyt==false){
		ctx.drawImage(mytHandState[2].image, 800, 450, 150, 225);
	} else{
		ctx.drawImage(mytHandState[2].image, 800, 440, 170, 255);
	}
}


//Checks if the user has completed his selected mythical card
function mytCardCheck(mytCard, rotation){

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

	var b = mytCard.array;


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
			protectorBoardState[0].points += mytCard.points;
			if (protectorBoardState[0].type == mytCard.type) {
				protectorBoardState[0].points++;
			};
			completeMyt();
			return;
		};
	}
	mytCard.array = rotate(mytCard.array);

	return mytCardCheck(mytCard, rotation + 1)
}

//Adds the completed mythical card to the list of user completed cards 
//and draws the user a new card
function completeMyt(myt){
	if (leftMyt == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfMytCards-1));
		//Add the completed card to the list of completed card
		addToCompleted(mytHandState[0]);
		//add that card to the game board
		mytHandState[0] = mytDeckState[randomNumber];
		//remove that card from the deck
		mytDeckState.splice(randomNumber, 1);
		numberOfMytCards--;
		if (numberOfMytCards <= 0) {
			shuffleMytDiscard();
		};
	};
	if (middleMyt == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfMytCards-1));
		addToCompleted(mytHandState[1]);
		//add that card to the game board
		mytHandState[1] = mytDeckState[randomNumber];
		//remove that card from the deck
		mytDeckState.splice(randomNumber, 1);
		numberOfMytCards--;
		if (numberOfMytCards <= 0) {
			shuffleMytDiscard();
		};
	};
	if (rightMyt == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfMytCards-1));
		addToCompleted(mytHandState[2]);
		//add that card to the game board
		mytHandState[2] = mytDeckState[randomNumber];
		//remove that card from the deck
		mytDeckState.splice(randomNumber, 1);
		numberOfMytCards--;
		if (numberOfMytCards <= 0) {
			shuffleMytDiscard();
		};
	};
}


//Adds the selected card to the list of completed cards
function addToCompleted(mytCard){
	mytComplete.push(mytCard);
	if (mytComplete.length >= 7) {
		gameEnd = true;
	};
}

//Adds the selected card to the discard pile
function addToDiscard(mytCard){
	mytDiscard.push(mytCard);
}

//Shuffles the discard pile into the deck
function shuffleMytDiscard(){

	numberOfMytCards = mytDiscard.length;

	for (var i = 0; i < numberOfMytCards; i++) {
		var randomNumber = Math.floor(Math.random() * (mytDiscard.length-1));
		mytDeckState[i] = mytDiscard[randomNumber]
		mytDiscard.splice(randomNumber, 1);
	};

}

//Draws new mythical cards for the computer and discards his other ones
function drawMytComputer(){
	for (var i = 0; i < 3; i++) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfMytCards-1));
		addToDiscard(player2MytHand[i]);
		//add that card to the game board
		player2MytHand[i] = mytDeckState[randomNumber];
		//remove that card from the deck
		mytDeckState.splice(randomNumber, 1);
		numberOfMytCards--;
		if (numberOfMytCards <= 0) {
			shuffleMytDiscard();
		};
	};
}

//=====================
//Computer Player stuff
//=====================
//Searches for a mythical card for the computer and completes it if the computer
//player is standing on it
function mytCardSearch(mytCard, rotation, nr){

	if (rotation >= 4) {
		return[];
	};

	var a = [["","","","",""],["","","","",""],["","","","",""],
					["","","","",""],["","","","",""]];

	var victory = [];
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			a[i][j]	=landBoardState[i][j].type;
		};
	};

	var b = mytCard.array;


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
			protectorBoardState[1].points += mytCard.points;
			if (protectorBoardState[1].type == mytCard.type) {
				protectorBoardState[1].points++;
			};
			completeComputerMyt(nr);
			return[];
		};
	}

	if (victory.length != 0) {
		return victory;
	};
	mytCard.array = rotate(mytCard.array);

	return mytCardSearch(mytCard, rotation + 1, nr)
}

//Adds the completed mythical card to the list of computer completed cards 
//and draws the computer a new card
function completeComputerMyt(nr){
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfMytCards-1));
		//Add the completed card to the list of completed card
		addToComputerCompleted(player2MytHand[nr]);
		//add that card to the game board
		player2MytHand[nr] = mytDeckState[randomNumber];
		//remove that card from the deck
		mytDeckState.splice(randomNumber, 1);
		numberOfMytCards--;
		if (numberOfMytCards <= 0) {
			shuffleMytDiscard();
		};
}

//Adds the selected card to the list of computer completed cards
function addToComputerCompleted(mytCard){
	mytComputerComplete.push(mytCard);
	if (mytComputerComplete.length >= 7) {
		gameEnd = true;
	};
}

//The Mythical card constructor
var MythicalCard = function(name, type, points, array, image, pawn) {
  this.name = name;
  this.type = type;
  this.points = points;
  this.array = array;
  this.image = image;
  this.pawn = pawn;
}

