// =================
// computerPlayer
// =================


/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


//Shows if its the users turn or not 
var playerTurn = true;

//shows if the player can still do something or not 
var shouldEndTurn = false;

//Shows how difficult the computer is Easy/Medium/Hard
var cpdiff = "Hard";

//Shows if the user can discard his cards or not
var UserCanDiscard = true;

//Holds spaces where the computer can finish bonus cards
var bonus1 = [];
var bonus2 = [];
var bonus3 = [];
var bonus4 = [];

//Holds spaces where the computer can finsh mythical cards
var myt1 = [];
var myt2 = [];
var myt3 = [];


//ends the computer turn starts the player turn
function endComputerTurn(){
	protectorBoardState[0].movement = 0;
	protectorBoardState[0].landSwitch = 0;
	protectorBoardState[1].movement = 0;
	protectorBoardState[1].landSwitch = 0;
	UserCanDiscard = true;
	shouldEndTurn = false;
	playerTurn = true;
	myt1 = myt2 = myt3 = bonus1 = bonus2 = bonus3 = bonus4 = [];
}

//Allows the computer to act out its turn
function cpTurn(){
	
	if (cpdiff == "Easy") {
		var rand = Math.floor(Math.random() * (2));
		if (rand == 0) {
			console.log("Wooops");
			drawMytComputer();
			endComputerTurn();
			return;
		};
	};

	if (cpdiff == "Medium") {
		var rand = Math.floor(Math.random() * (10));
		if (rand == 0) {
			console.log("Wooops");
			drawMytComputer();
			endComputerTurn();
			return;
		};
	}

	seeGoalDone();
	checkGoals();
	
	if (protectorBoardState[1].movement == 0 && bonus4.length == 0 && bonus3.length == 0
		&& bonus2.length == 0 && bonus1.length == 0 && myt1.length == 0
		&& myt2.length == 0 && myt3.length == 0) {
		console.log("Drawing better cards");
		drawMytComputer();
	};
	endComputerTurn();
	console.log("Computer Did a thing");
}

//checks for cards the computer can finish right now somewhere on the board
function checkGoals(){

	if (myt1.length != 0) {
		movePawncloser(myt1[0][0], myt1[0][1]);
		mytCardSearch(player2MytHand[0], 0, 0);
		console.log("You Did another thing: "+ myt1[0][0] + " and " + myt1[0][1]);
	};
	if (myt2.length != 0) {
		movePawncloser(myt2[0][0], myt2[0][1]);
		mytCardSearch(player2MytHand[1], 0, 1);
		console.log("You Did another thing: "+ myt2[0][0] + " and " + myt2[0][1]);
	};
	if (myt3.length != 0) {
		movePawncloser(myt3[0][0], myt3[0][1]);
		mytCardSearch(player2MytHand[2], 0, 2);
		console.log("You Did another thing: "+ myt3[0][0] + " and " + myt3[0][1]);
	};
	if (bonus1.length != 0) {
		movePawncloser(bonus1[0][0], bonus1[0][1]);
		bonusCardSearch(bonusCardBoardState[0], 0, 0);
		console.log("You Did another thing: "+ bonus1[0][0] + " and " + bonus1[0][1]);
	};
	if (bonus2.length != 0) {
		movePawncloser(bonus2[0][0], bonus2[0][1]);
		bonusCardSearch(bonusCardBoardState[1], 0, 1);
		console.log("You Did another thing: "+ bonus2[0][0] + " and " + bonus2[0][1]);
	};
	if (bonus3.length != 0) {
		movePawncloser(bonus3[0][0], bonus3[0][1]);
		bonusCardSearch(bonusCardBoardState[2], 0, 2);
		console.log("You Did another thing: "+ bonus3[0][0] + " and " + bonus3[0][1]);
	};
	if (bonus4.length != 0) {
		movePawncloser(bonus4[0][0], bonus4[0][1]);
		bonusCardSearch(bonusCardBoardState[3], 0, 3);
		console.log("You Did another thing: "+ bonus4[0][0] + " and " + bonus4[0][1]);
	};
	return false;
}

//checks for cards the computer can finish where he is standing
function seeGoalDone(){

	myt1 = mytCardSearch(player2MytHand[0], 0, 0);
	
	myt2 = mytCardSearch(player2MytHand[1], 0, 1);
	
	myt3 = mytCardSearch(player2MytHand[2], 0, 2);
	
	bonus1 = bonusCardSearch(bonusCardBoardState[0], 0, 0);
	
	bonus2 = bonusCardSearch(bonusCardBoardState[1], 0, 1);
	
	bonus3 = bonusCardSearch(bonusCardBoardState[2], 0, 2);
	
	bonus4 = bonusCardSearch(bonusCardBoardState[3], 0, 3);

}

//Allows the computer to move its pawn one step closer to its goal
function movePawncloser(goalX, goalY){
	
	var tmp = 0;
	
	while(protectorBoardState[1].movement < 3 && tmp < 3){
		bestWayToGo(goalX, goalY, protectorBoardState[1].pawnPos[0], 
					protectorBoardState[1].pawnPos[1]);
		tmp++;
	}
}

//Calculates the best space to move to from current location
//to goal location
function bestWayToGo(goalX, goalY, currX, currY){
	if (goalX == currX) {
		if (goalY < currY) {
			//upp um einn
			movePlayerPawn(75, 75, currX, currY-1, 1);
			if (cpdiff == "Hard") {
				seeGoalDone()
			};
			return;
		};
		if (goalY > currY) {
			//niður um einn
			movePlayerPawn(75, 75, currX, currY+1, 1);
			if (cpdiff == "Hard") {
				seeGoalDone()
			};
			return;
		};
	};
	if (goalY == currY) {
		if (goalX < currX) {
			//vinstri einn
			movePlayerPawn(75, 75, currX-1, currY, 1);
			if (cpdiff == "Hard") {
				seeGoalDone()
			};
			return;
		};
		if (goalX > currX) {
			//hægri einn
			movePlayerPawn(75, 75, currX+1, currY, 1);
			if (cpdiff == "Hard") {
				seeGoalDone()
			};
			return;
		};
	};
	if (goalX > currX) {
		if (goalY < currY) {
			//hægri upp um einn
			movePlayerPawn(75, 75, currX+1, currY-1, 1);
			if (cpdiff == "Hard") {
				seeGoalDone()
			};
			return;
		};
		if (goalY > currY) {
			//hægri niður um einn
			movePlayerPawn(75, 75, currX+1, currY+1, 1);
			if (cpdiff == "Hard") {
				seeGoalDone()
			};
			return;
		};
	};
	if (goalX < currX) {
		if (goalY < currY) {
			//vinstri upp um einn
			movePlayerPawn(75, 75, currX-1, currY-1, 1);
			if (cpdiff == "Hard") {
				seeGoalDone()
			};
			return;
		};
		if (goalY > currY) {
			//vinstri niður um einn
			movePlayerPawn(75, 75, currX-1, currY+1, 1);
			if (cpdiff == "Hard") {
				seeGoalDone()
			};
			return;
		};
	};
}

//Allows the computer to choose a starting space
function cpStartSpace(){

	chooseStartSpace(1);

    if (threePlayerGame || fourPlayerGame) {
    	chooseStartSpace(2);
    };

    if (fourPlayerGame) {
    	chooseStartSpace(3);
	}
}

//chooses a specific player starting postision
function chooseStartSpace(Player){
	
	protectorBoardState[Player].movement++;
	
	for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (landBoardState[j][i].type==protectorBoardState[Player].type) {
                protectorBoardState[Player].canvasPos[0] = 75*i;
                protectorBoardState[Player].canvasPos[1] = 75*j;
                protectorBoardState[1].pawnPos[0] = i;
                protectorBoardState[1].pawnPos[1] = j;
                return;
            };
        };
    };
}

//Changes the difficulty of the computer player Easy->Medium->Hard->Easy->...
function cpdiffup(){
	
	if (cpdiff == "Easy") {
		cpdiff = "Medium";
		return;
	};
	
	if (cpdiff == "Medium") {
		cpdiff = "Hard";
		return;
	};
	
	if (cpdiff == "Hard") {
		cpdiff = "Easy";
		return;
	};
}