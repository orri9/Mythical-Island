// =====
// UTILS
// =====


/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


//A coinflip to see witch elemental protector should be used in the games menu
var randAir		= Math.floor(Math.random()*2);
var randFire	= Math.floor(Math.random()*2) + 2;
var randEarth	= Math.floor(Math.random()*2) + 4;
var randWater	= Math.floor(Math.random()*2) + 6;

//Shows what tutorial page the user is on
var tutorialpage = 0;

//Clears the canvas to get ready for the next frame
function clearCanvas(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

//Draws a string at location (center of canvas, y) with the font font 
function drawCenteredString(ctx, text, font, y) {
    //Setting the right font
    ctx.font = font;
    // Determine the X coordinate for the text
    var x = (ctx.canvas.width - ctx.measureText(text).width) / 2;
    // Draw the String
	ctx.fillText(text, x, y);
}

//Sets all game states to false
function setFalse(){
    startmenu = false;
    newGame = false;
    loadGame = false;
	options = false;
    
    tutorial = false;
    pdfReading = false;
    tutorialpage = 0;
	tutorial_video = false;
    credits = false;
   	
   	twoPlayerGame = false;
   	threePlayerGame = false;
    fourPlayerGame = false;

	setHandFalse();

	shouldEndTurn = false;
	playerTurn = true;
	UserCanDiscard = true;
	gameEnd = false;
    boardDone = false;
    numberOfMytCards = 28;
    numberOfLandCards = 60;
	numberOfBonusCards = 20;
	numberOfProCards = 8;
	startingSpace =false;
	landBoardState = [["","","","",""],["","","","",""],["","","","",""],
					["","","","",""],["","","","",""]];
	mytDiscard = [];
	mytComplete = [];
	mytComputerComplete = [];
	landDiscard = [];
	landDeckState = [];
	mytDeckState = [];
	landHandState = [];
}

//To unselect all cards in the players hand
function setHandFalse(){
    uppLeftLand = false;
	uppRightLand = false;
	downLeftLand = false;
	downRightLand = false;
	leftMyt = false;
	middleMyt = false;
	rightMyt = false;
}

//Simulates fliping the tutorial booklet page to the right
function flipPageRight(){
	
	if (tutorialpage  < 8) {
		tutorialpage++;
	};
}

//Simulates fliping the tutorial booklet page to the left
function flipPageLeft(){
	
	if (tutorialpage  > 0) {
		tutorialpage--;
	};
}

//A function to simulate a XOR gate
//	a 	| 	b 	|  xOR 	|
//=======================
//	0	| 	0	|	0	|
//	1 	|	0	|	1 	|
//	0	|	1 	|	1 	|
//	1 	|	1 	|	0	|
function xOR(a,b) {
  return ( a || b ) && !( a && b );
}

//finds the size of a matrix
function size(ar){
    var row_count = ar.length;
    var row_sizes = []
    for(var i=0;i<row_count;i++){
        row_sizes.push(ar[i].length)
    }
    return [row_count, Math.min.apply(null, row_sizes)]
}

//Rotates a given matrix by 90°
function rotate(matrix) {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]).reverse();
        result.push(row);
    }
    return result;
};

//finds alll places the player can be on to complete the selected card
function findVictoryPlaces(col, row, b){

	var result = [];

	for (var i = 0; i < b.length; i++) {
		for (var j = 0; j < b[i].length; j++) {
			if (b[i][j] != "") {
				result.push([col+j,row+i]);
			}
		};
	};
	return result;
}