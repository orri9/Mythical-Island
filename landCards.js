// =====
// landCards
// =====


/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


//number of land cards in the deck
var numberOfLandCards = 60;

//the state of the land card deck
var landDeckState = [];

//the state of the lands on the gameBoard
var landBoardState = [["","","","",""],["","","","",""],["","","","",""],
					["","","","",""],["","","","",""]];

//state of the lands in the players hand
var landHandState = [];

//What land cards each computer player has
var player2LandHand = [];
var player3LandHand = [];
var player4LandHand = [];

//state of the land discard pile
var landDiscard = [];

//shows what land cards the user has selected
var uppLeftLand = false;
var uppRightLand = false;
var downLeftLand = false;
var downRightLand = false;

//======================
//Makes a 5x5 Game Board
//======================
function make5Board(){


	//Make a deck with 13 of each element cards and 8 northen lights cards
	airLand		= new LandCard("Air", g_images.air);
	earthLand	= new LandCard("Earth", g_images.earth);
	fireLand	= new LandCard("Fire", g_images.fire);
	waterLand	= new LandCard("Water", g_images.water);
	nlightsLand	= new LandCard("Nlights", g_images.nlights);

	var landDeck = [
					airLand, airLand, airLand, airLand, airLand, airLand, airLand, 
					airLand, airLand, airLand, airLand, airLand, airLand, 
					earthLand, earthLand, earthLand, earthLand, earthLand, earthLand, 
					earthLand, earthLand, earthLand, earthLand, earthLand, earthLand, 
					earthLand, 
					fireLand, fireLand, fireLand, fireLand, fireLand, fireLand, fireLand, 
					fireLand, fireLand, fireLand, fireLand, fireLand, fireLand, 
					waterLand, waterLand, waterLand, waterLand, waterLand, waterLand, 
					waterLand, waterLand, waterLand, waterLand, waterLand, waterLand, 
					waterLand, 
					nlightsLand, nlightsLand, nlightsLand, nlightsLand, nlightsLand, 
					nlightsLand, nlightsLand, nlightsLand
					];

	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			//Draw a random card
			var randomNumber = Math.floor(Math.random() * (numberOfLandCards-1));
			//add that card to the game board
			landBoardState[i][j] = landDeck[randomNumber];
			//remove that card from the deck
			landDeck.splice(randomNumber,1);
			numberOfLandCards--;
		};
    };

    console.log(landBoardState);
    landDeckState = landDeck;

    return landBoardState;
}

//Makes a 4 land card hand for the player
function makeLandHand(){

	//for testing
	var landDeck = landDeckState;

	for (var i = 0; i < 4; i++) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfLandCards-1));
		//add that card to the game board
		landHandState[i] = landDeck[randomNumber];
		//remove that card from the deck
		landDeck.splice(randomNumber, 1);
		numberOfLandCards--;
		if (numberOfLandCards <= 0) {
			shuffleLandDiscard();
		};
	};

	for (var i = 0; i < 4; i++) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfLandCards-1));
		//add that card to the game board
		player2LandHand[i] = landDeck[randomNumber];
		//remove that card from the deck
		landDeck.splice(randomNumber, 1);
		numberOfLandCards--;
		if (numberOfLandCards <= 0) {
			shuffleLandDiscard();
		};
	};

	landDeckState = landDeck;

	return landHandState;
}

//draws the deck and discardpile of the land cards
function makeLandCardDeck(){

	//if deck has more than 10 cards then draw 8 card backs in land deck or 
	//draw remaining number of cards in land deck
	for (var i = 0; ((i < numberOfLandCards) && (i < 8)); i++) {

		ctx.drawImage(g_images.landCardBack,250 +(i*2), 175+(i*2), 75, 75);
	};
	for (var i = 0; i < landDiscard.length; i++) {

		ctx.drawImage(landDiscard[i].image, 250 +(i*2), 265+(i*2), 75, 75);
	};
}

//draws the Lands on the Game Board
function drawLandBoard(){
	var tmpY = 0; 
    	
    for (var i = 0; i < landBoardState.length; i++) {
		var tmpX = 0;
		for (var j = 0; j < landBoardState.length; j++) {
    		ctx.drawImage(landBoardState[i][j].image, 513 + tmpX, 64 + tmpY,70,70);
   			tmpX += 75;
		};
		tmpY += 75;
    };
}

//draws the players land cards hand
function drawLandHand(){

	if (uppLeftLand==false){
		ctx.drawImage(landHandState[0].image, 1000, 450, 100, 100);
	} else{
		ctx.drawImage(landHandState[0].image, 1000, 450, 120, 120);
	}
	if (uppRightLand==false){
		ctx.drawImage(landHandState[1].image, 1125, 450, 100, 100);
	} else{
		ctx.drawImage(landHandState[1].image, 1125, 450, 120, 120);
	}
	if (downLeftLand==false){
		ctx.drawImage(landHandState[2].image, 1000, 575, 100, 100);
	} else{
		ctx.drawImage(landHandState[2].image, 1000, 575, 120, 120);
	}
	if (downRightLand==false){
		ctx.drawImage(landHandState[3].image, 1125, 575, 100, 100);
	} else{
		ctx.drawImage(landHandState[3].image, 1125, 575, 120, 120);
	}
}

//allows the user to draw cards from the landcard deck
function drawLands(board, j, i){
	if (board == true && uppLeftLand == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfLandCards-1));
		//add that card to the game board
		addToLandDiscard(landBoardState[j][i]);
		landBoardState[j][i] = landHandState[0];
		landHandState[0] = landDeckState[randomNumber];
		//remove that card from the deck
		landDeckState.splice(randomNumber, 1);
		numberOfLandCards--;
		if (numberOfLandCards <= 0) {
			shuffleLandDiscard();
		};
		return;
	};
	if (board == true && uppRightLand == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfLandCards-1));
		//add that card to the game board
		addToLandDiscard(landBoardState[j][i]);
		landBoardState[j][i] = landHandState[1];
		landHandState[1] = landDeckState[randomNumber];
		//remove that card from the deck
		landDeckState.splice(randomNumber, 1);
		numberOfLandCards--;
		if (numberOfLandCards <= 0) {
			shuffleLandDiscard();
		};
		return;
	};
	if (board == true && downLeftLand == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfLandCards-1));
		//add that card to the game board
		addToLandDiscard(landBoardState[j][i]);
		landBoardState[j][i] = landHandState[2];
		landHandState[2] = landDeckState[randomNumber];
		//remove that card from the deck
		landDeckState.splice(randomNumber, 1);
		numberOfLandCards--;
		if (numberOfLandCards <= 0) {
			shuffleLandDiscard();
		};
		return;
	};
	if (board == true && downRightLand == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfLandCards-1));
		//add that card to the game board
		addToLandDiscard(landBoardState[j][i]);
		landBoardState[j][i] = landHandState[3];
		landHandState[3] = landDeckState[randomNumber];
		//remove that card from the deck
		landDeckState.splice(randomNumber, 1);
		numberOfLandCards--;
		if (numberOfLandCards <= 0) {
			shuffleLandDiscard();
		};
		console.log(landBoardState[j][i]);
		return;
	};
	if (uppLeftLand == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfLandCards-1));
		//add that card to the game board
		addToLandDiscard(landHandState[0]);
		landHandState[0] = landDeckState[randomNumber];
		//remove that card from the deck
		landDeckState.splice(randomNumber, 1);
		numberOfLandCards--;
		if (numberOfLandCards <= 0) {
			shuffleLandDiscard();
		};
	};
	if (uppRightLand == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfLandCards-1));
		//add that card to the game board
		addToLandDiscard(landHandState[1]);
		landHandState[1] = landDeckState[randomNumber];
		//remove that card from the deck
		landDeckState.splice(randomNumber, 1);
		numberOfLandCards--;
		if (numberOfLandCards <= 0) {
			shuffleLandDiscard();
		};
	};
	if (downLeftLand == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfLandCards-1));
		addToLandDiscard(landHandState[2]);
		//add that card to the game board
		landHandState[2] = landDeckState[randomNumber];
		//remove that card from the deck
		landDeckState.splice(randomNumber, 1);
		numberOfLandCards--;
		if (numberOfLandCards <= 0) {
			shuffleLandDiscard();
		};
	};
	if (downRightLand == true) {
		//Draw a random card
		var randomNumber = Math.floor(Math.random() * (numberOfLandCards-1));
		addToLandDiscard(landHandState[3]);
		//add that card to the game board
		landHandState[3] = landDeckState[randomNumber];
		//remove that card from the deck
		landDeckState.splice(randomNumber, 1);
		numberOfLandCards--;
		if (numberOfLandCards <= 0) {
			shuffleLandDiscard();
		};
	};
}

//Adds the selected land card to the discard pile
function addToLandDiscard(landCard){
	landDiscard.push(landCard);
}

//shuffles the discard pile into the deck
function shuffleLandDiscard(){

	numberOfLandCards = landDiscard.length;

	for (var i = 0; i < numberOfLandCards; i++) {
		var randomNumber = Math.floor(Math.random() * (landDiscard.length-1));
		landDeckState[i] = landDiscard[randomNumber]
		landDiscard.splice(randomNumber, 1);
	};

}

//A land card constructor 
var LandCard = function(type, image) {

  this.type = type;
  this.image = image;

}
