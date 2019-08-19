// =================
// gameBoard
// =================


/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


//Renders a 2player gameboard
function renderGameBoard(ctx) {

    ctx.drawImage(g_images.smallBoard, 510, 60);

    if (boardDone == false) {
    	protectorBoardState = makeProtectors(2);
    	landBoardState = make5Board();
    	bonusCardBoardState = makeBonusCards(4);
    	mytHandState = makeMytHand();
    	landHandState = makeLandHand();
    	boardDone = true;
    };

    drawLandBoard();
    makeLandCardDeck();   
    makeMytCardDeck();
    drawProtectorCards();   		

   	ctx.drawImage(bonusCardBoardState[0].image, 1010, 75, 100, 150);
    ctx.drawImage(bonusCardBoardState[1].image, 1010, 275, 100, 150);
    ctx.drawImage(bonusCardBoardState[2].image, 900, 75, 100, 150);
	ctx.drawImage(bonusCardBoardState[3].image, 900, 275, 100, 150);
	pawnPlaceOnBoard();
	bonusCardPawns();
	//Draws the players hand
    drawMytHand();
	drawLandHand();
	
	if (playerTurn == false) {
		cpTurn();
	};
}

