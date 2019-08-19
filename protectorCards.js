// =====
// protectorCards
// =====


/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


//number of protector cards in the protector card deck
var numberOfProCards = 8;

//Makes a selected number of players and selects a element they play as
function makeProtectors(cards){

    var protector1 = new ProtectorCard("pCard1", "Air", 0, [0,0], [0,0], -1, 0, 
        g_images.airProtector1, g_images.airPawn, g_images.airPuck); 
    var protector2 = new ProtectorCard("pCard2", "Air", 0, [0,0], [0,0], -1, 0, 
        g_images.airProtector2, g_images.airPawn, g_images.airPuck); 

    var protector3 = new ProtectorCard("pCard3", "Earth", 0, [0,0], [0,0], -1, 0, 
        g_images.earthProtector1, g_images.earthPawn, g_images.earthPuck); 
    var protector4 = new ProtectorCard("pCard4", "Earth", 0, [0,0], [0,0], -1, 0, 
        g_images.earthProtector2, g_images.earthPawn, g_images.earthPuck); 

    var protector5 = new ProtectorCard("pCard5", "Fire", 0, [0,0], [0,0], -1, 0, 
        g_images.fireProtector1, g_images.firePawn, g_images.firePuck); 
    var protector6 = new ProtectorCard("pCard6", "Fire", 0, [0,0], [0,0], -1, 0, 
        g_images.fireProtector2, g_images.firePawn, g_images.firePuck); 

    var protector7 = new ProtectorCard("pCard7", "Water", 0, [0,0], [0,0], -1, 0, 
        g_images.waterProtector1, g_images.waterPawn, g_images.waterPuck); 
    var protector8 = new ProtectorCard("pCard8", "Water", 0, [0,0], [0,0], -1, 0, 
        g_images.waterProtector2, g_images.waterPawn, g_images.waterPuck); 

    //Make a deck with 8 protector cards
    var proDeckState = [
    				protector1, protector2, protector3, protector4, 
                    protector5, protector6, protector7, protector8, 
    				];


    var proBoardState = [];
    	
	//Draw a random card
	var randomNumber = Math.floor(Math.random() * (numberOfProCards-1));
	
	//add that card to the game board
	proBoardState[0] = proDeckState[randomNumber];

	//remove that card from the deck
	if (randomNumber%2 == 0) {
		proDeckState.splice(randomNumber,2);
	};
	if (randomNumber%2 != 0) {
		proDeckState.splice(randomNumber - 1,2);
	};
	numberOfProCards--;
	numberOfProCards--;

    for (var i = 1; i < cards; i++) {
    	
    	//Draw a random card
    	var randomNumber = Math.floor(Math.random() * (numberOfProCards-1));
    	
    	//add that card to the game board
    	proBoardState[i] = proDeckState[randomNumber];

    	//remove that card from the deck
    	if (randomNumber%2 == 0) {
    		proDeckState.splice(randomNumber,2);
    	};
    	if (randomNumber%2 != 0) {
    		proDeckState.splice(randomNumber - 1,2);
    	};

		numberOfProCards--;
		numberOfProCards--;
	};

	return proBoardState;
}


//checks if the player is allow to a selected tile on the gameboard
function playerMoved(x, y){
    if (x == protectorBoardState[0].pawnPos[0] && y == protectorBoardState[0].pawnPos[1]) {
        return false;
    };

    for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
            if (y + j == protectorBoardState[0].pawnPos[1] && 
                x + i == protectorBoardState[0].pawnPos[0]) {
                return true;
            };
        };
    };
    return false;
}

//To-Do add a third and fourth player:
//draws the protector cards for Players 1 and 2
function drawProtectorCards(){
    ctx.drawImage(protectorBoardState[0].image, 10, 440, 375, 250);

    ctx.drawImage(protectorBoardState[1].image, 10, 25, 225, 150);
}

//draws a pawn on each completed bonus card
function bonusCardPawns(){

    for (var j = 0; j < protectorBoardState.length; j++) {
        if (bonusCardBoardState[0].owner == protectorBoardState[j].type) {
            ctx.drawImage(protectorBoardState[j].puck, 1035, 75, 50, 50); 
        };
        if (bonusCardBoardState[1].owner == protectorBoardState[j].type) {
            ctx.drawImage(protectorBoardState[j].puck, 1035, 275, 50, 50); 
        };
        if (bonusCardBoardState[2].owner == protectorBoardState[j].type) {
            ctx.drawImage(protectorBoardState[j].puck, 925, 75, 50, 50); 
        };
        if (bonusCardBoardState[3].owner == protectorBoardState[j].type) {
            ctx.drawImage(protectorBoardState[j].puck, 925, 275, 50, 50); 
        };
    };
}

//Moves the player pawn to the selected space
function movePlayerPawn(x, y, i, j, Player){
    
    protectorBoardState[Player].canvasPos[0] = x*i;
    protectorBoardState[Player].canvasPos[1] = y*j;
    protectorBoardState[Player].pawnPos[0] = i;
    protectorBoardState[Player].pawnPos[1] = j;
    protectorBoardState[Player].movement++;
}

//draws the pawns on the Game Board
function pawnPlaceOnBoard(){
        if (startingSpace==false) {
        if (protectorBoardState[1].type== "Air") {          
            ctx.drawImage(g_images.airPawn, 250, 100, 40, 60);      
        };
        if (protectorBoardState[1].type== "Earth") {        
            ctx.drawImage(g_images.earthPawn, 250, 100, 40, 60);        
        };
        if (protectorBoardState[1].type== "Fire") {         
            ctx.drawImage(g_images.firePawn, 250, 100, 40, 60);                 
        };
        if (protectorBoardState[1].type== "Water") {
            ctx.drawImage(g_images.waterPawn, 250, 100, 40, 60);                
        };

        if (protectorBoardState[0].type == "Air") {         
            ctx.drawImage(g_images.airPawn, g_mouseX-20, g_mouseY-30, 40, 60);      
        };
        if (protectorBoardState[0].type== "Earth") {        
            ctx.drawImage(g_images.earthPawn, g_mouseX-20, g_mouseY-30, 40, 60);        
        };
        if (protectorBoardState[0].type== "Fire") {         
            ctx.drawImage(g_images.firePawn, g_mouseX-20, g_mouseY-30, 40, 60);                 
        };
        if (protectorBoardState[0].type== "Water") {
            ctx.drawImage(g_images.waterPawn, g_mouseX-20, g_mouseY-30, 40, 60);                
        };
    };
    if (startingSpace==true) {
        if (protectorBoardState[1].type== "Air") {          
            ctx.drawImage(g_images.airPawn, 513 + protectorBoardState[1].canvasPos[0], 
                            74 + protectorBoardState[1].canvasPos[1], 40, 60);      
        };
        if (protectorBoardState[1].type== "Earth") {        
            ctx.drawImage(g_images.earthPawn, 523 + protectorBoardState[1].canvasPos[0], 
                            74 + protectorBoardState[1].canvasPos[1], 40, 60);          
        };
        if (protectorBoardState[1].type== "Fire") {         
            ctx.drawImage(g_images.firePawn, 533 + protectorBoardState[1].canvasPos[0], 
                            74 + protectorBoardState[1].canvasPos[1], 40, 60);                  
        };
        if (protectorBoardState[1].type== "Water") {
            ctx.drawImage(g_images.waterPawn, 543 + protectorBoardState[1].canvasPos[0], 
                            74 + protectorBoardState[1].canvasPos[1], 40, 60);                  
        };

        if (protectorBoardState[0].type== "Air") {          
            ctx.drawImage(g_images.airPawn, 513 + protectorBoardState[0].canvasPos[0], 
                            74 + protectorBoardState[0].canvasPos[1], 40, 60);      
        };
        if (protectorBoardState[0].type== "Earth") {        
            ctx.drawImage(g_images.earthPawn, 523 + protectorBoardState[0].canvasPos[0], 
                            74 + protectorBoardState[0].canvasPos[1], 40, 60);          
        };
        if (protectorBoardState[0].type== "Fire") {         
            ctx.drawImage(g_images.firePawn, 533 + protectorBoardState[0].canvasPos[0], 
                            74 + protectorBoardState[0].canvasPos[1], 40, 60);                  
        };
        if (protectorBoardState[0].type== "Water") {
            ctx.drawImage(g_images.waterPawn, 543 + protectorBoardState[0].canvasPos[0], 
                            74 + protectorBoardState[0].canvasPos[1], 40, 60);                  
        };
    };
}

//A ProtectorCard constructor
var ProtectorCard = function(name, type, points, canvasPos, pawnPos, movement, landSwitch, 
                            image, pawn, puck) {
  this.name = name;
  this.type = type;
  this.points = points;
  this.canvasPos = canvasPos;
  this.pawnPos = pawnPos;
  this.movement = movement;
  this.landSwitch = landSwitch;
  this.image = image;
  this.pawn = pawn;
  this.puck = puck;
}
