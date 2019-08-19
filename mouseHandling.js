// ==============
// MOUSE HANDLING
// ==============


/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


"use strict";

/* jshint browser: true, devel: true, globalstrict: true */


//Shows what language is being used
var language = "English";

//Holds all images from the rules booklet
var rulesBooklet = [];

//Shows X and Y cordinates of the users mouse
var g_mouseX = 0,
    g_mouseY = 0;


function handleMouse(evt) {
    
    //getting the X and Y cordinates for the users mouse
    g_mouseX = evt.clientX - g_canvas.offsetLeft;
    g_mouseY = evt.clientY - g_canvas.offsetTop;
        
    
    //==========
    //StartMenu
    //==========
    if (startmenu==true) {
    	if (g_mouseX>620 && g_mouseX<800 && g_mouseY>250 && g_mouseY<290) {
    		//sets all states as false
    		setFalse();
    		//set new game state as true
    		newGame = true;
    	};
    	if (g_mouseX>620 && g_mouseX<800 && g_mouseY>291 && g_mouseY<331) {
    		setFalse();
    		loadGame = true;
    	};
    	if (g_mouseX>620 && g_mouseX<800 && g_mouseY>332 && g_mouseY<372) {
    		setFalse();
    		options = true;
    	};
    	if (g_mouseX>620 && g_mouseX<800 && g_mouseY>373 && g_mouseY<413) {
    		setFalse();
    		tutorial = true;
    	};
    	if (g_mouseX>620 && g_mouseX<800 && g_mouseY>414 && g_mouseY<454) {
    		setFalse();
    		credits = true;
    	};

    };

    //Back to main menu button
    if (newGame==true || loadGame==true || options==true || tutorial==true || 
        credits==true || twoPlayerGame == true || threePlayerGame == true || 
        fourPlayerGame == true || pdfReading==true) {
		if (g_mouseX>0 && g_mouseX<170 && g_mouseY>0 && g_mouseY<30) {
            setFalse();
            startmenu = true;
        };
    };

    //Back to options button
    if (twoPlayerGame == true || threePlayerGame == true || fourPlayerGame == true) {
        if (g_mouseX>1100 && g_mouseX<1400 && g_mouseY>0 && g_mouseY<30) {
            setFalse();
            options = true;
        };
    };

    //==========
    //OptionsMenu
    //==========
    if (options==true) {
        if (g_mouseX>500 && g_mouseX<900 && g_mouseY>332 && g_mouseY<372) {
            cpdiffup();
        };
        if (g_mouseX>590 && g_mouseX<800 && g_mouseY>373 && g_mouseY<413) {
            music = !music;
        };
        if (g_mouseX>590 && g_mouseX<800 && g_mouseY>414 && g_mouseY<454) {
            language = "Comming Soon in other languages";
        };
    }

    //============
    //TutorialMenu
    //============
    if (tutorial==true) {
        if (g_mouseX>500 && g_mouseX<900 && g_mouseY>332 && g_mouseY<372) {
            setFalse();
            rulesBooklet = [g_images.tutorial1, g_images.tutorial2, g_images.tutorial3, 
                            g_images.tutorial4, g_images.tutorial5, g_images.tutorial6, 
                            g_images.tutorial7, g_images.tutorial8, g_images.tutorial9, 
                            g_images.tutorial10, g_images.tutorial11, g_images.tutorial12, 
                            g_images.tutorial13, g_images.tutorial14, g_images.tutorial15, 
                            g_images.tutorial16];
            pdfReading = true;
        };
        if (g_mouseX>590 && g_mouseX<800 && g_mouseY>373 && g_mouseY<413) {
            //To-do:add a video tutorial
        };
        if (g_mouseX>590 && g_mouseX<800 && g_mouseY>414 && g_mouseY<454) {
            setFalse();
            cpdiff = "Easy";
            twoPlayerGame = true;
        };
    }

    //================
    //TutorialBooklet
    //================
    if (pdfReading==true) {
        if (g_mouseX>0 && g_mouseX<300 && g_mouseY>50 && g_mouseY<650) {
            //To-do:add pdf and arrows
            flipPageLeft();
        };
        if (g_mouseX>1050 && g_mouseX<1400 && g_mouseY>50 && g_mouseY<650) {
            //To-do:add pdf and arrows
            flipPageRight();
        };
    }    

    //==========
    //NewGameMenu
    //==========
    if (newGame==true) {
        if (g_mouseX>590 && g_mouseX<800 && g_mouseY>332 && g_mouseY<372) {
    		setFalse();
       		twoPlayerGame = true;
    	};
    	if (g_mouseX>590 && g_mouseX<800 && g_mouseY>373 && g_mouseY<413) {
    		setFalse();
    		threePlayerGame = true;
    	};
    	if (g_mouseX>590 && g_mouseX<800 && g_mouseY>414 && g_mouseY<454) {
    		setFalse();
    		fourPlayerGame = true;
    	};
    }

    //==============
    //TwoPlayerGame
    //==============
    if ((twoPlayerGame == true || threePlayerGame == true || fourPlayerGame == true) 
        && playerTurn) {
    	
        //The Players select a starting position
        if (g_mouseX>513 && g_mouseX<888 && g_mouseY>64 && g_mouseY<439 && 
            startingSpace == false) {
        	var Xtmp = 75;
        	for (var i = 0; i < 5; i++) {
        		var Ytmp = 75;
        		for (var j = 0; j < 5; j++) {
       				if (g_mouseX>513+(Xtmp*i) && g_mouseX<583+(Xtmp*i) && g_mouseY>64+(Ytmp*j) 
                        && g_mouseY<134+(Ytmp*j)) {
        				if (landBoardState[j][i].type==protectorBoardState[0].type) {
        					movePlayerPawn(Xtmp, Ytmp, i, j, 0);
                            startingSpace = true;
                            cpStartSpace();
                            return;
    	    			};
        			};
    	    	};
        	};
        };

        //Changes what Land cards the User has selected
        if (g_mouseX>1000 && g_mouseX<1245 && g_mouseY>450 && g_mouseY<695 
            && startingSpace == true && !shouldEndTurn) {
            if (g_mouseX>1000 && g_mouseX<1120 && g_mouseY>450 && g_mouseY<570) {
                uppLeftLand =! uppLeftLand;
            };
            if (g_mouseX>1125 && g_mouseX<1245 && g_mouseY>450 && g_mouseY<570) {
                uppRightLand =! uppRightLand;
            };
            if (g_mouseX>1000 && g_mouseX<1120 && g_mouseY>575 && g_mouseY<695) {
                downLeftLand =! downLeftLand;
            };
            if (g_mouseX>1125 && g_mouseX<1245 && g_mouseY>575 && g_mouseY<695) {
                downRightLand =! downRightLand;
            };
        };

        //Changes what Mythical cards the User has selected
        if (g_mouseX>450 && g_mouseX<1185 && g_mouseY>450 && g_mouseY<640 && 
            startingSpace == true && !shouldEndTurn) {
            if (g_mouseX>450 && g_mouseX<600 && g_mouseY>450 && g_mouseY<675) {
                leftMyt =! leftMyt;
            };
            if (g_mouseX>625 && g_mouseX<775 && g_mouseY>450 && g_mouseY<675) {
                middleMyt =! middleMyt;
            };
            if (g_mouseX>800 && g_mouseX<950 && g_mouseY>450 && g_mouseY<675) {
                rightMyt =! rightMyt;
            };
        };

        //Allows User to discard and redraw selected cards
        if ((downRightLand || downLeftLand || uppRightLand || uppLeftLand ||
            leftMyt || middleMyt || rightMyt)  && !shouldEndTurn && UserCanDiscard &&
            g_mouseX>15 && g_mouseX<330 && g_mouseY>175 && g_mouseY<325) {
            
            UserCanDiscard = false;
            shouldEndTurn = true;
            drawLands();
            drawMyt();
            setHandFalse();
        };

        //Check if User has done his selected MythicalCard
        if (g_mouseX>513 && g_mouseX<888 && g_mouseY>64 && g_mouseY<439 && 
            startingSpace && !shouldEndTurn &&
            (xOR(xOR(leftMyt, middleMyt), rightMyt)) && 
            !(leftMyt && middleMyt && rightMyt) &&
            !( uppLeftLand || uppRightLand || downLeftLand || downRightLand)) {
            var Xtmp = 75;
            for (var i = 0; i < 5; i++) {
                var Ytmp = 75;
                for (var j = 0; j < 5; j++) {
                    if (g_mouseX>513+(Xtmp*i) && g_mouseX<583+(Xtmp*i) && 
                        g_mouseY>64+(Ytmp*j) && g_mouseY<134+(Ytmp*j) && leftMyt) {
                        if (landBoardState[j][i].type==mytHandState[0].type || 
                            landBoardState[j][i].type == "Nlights") {
                            UserCanDiscard = false;
                            mytCardCheck(mytHandState[0], 0);
                            setHandFalse();
                            return;
                        };
                    };
                    if (g_mouseX>513+(Xtmp*i) && g_mouseX<583+(Xtmp*i) && 
                        g_mouseY>64+(Ytmp*j) && g_mouseY<134+(Ytmp*j) && middleMyt) {
                        if (landBoardState[j][i].type==mytHandState[1].type || 
                            landBoardState[j][i].type == "Nlights") {
                            UserCanDiscard = false;
                            mytCardCheck(mytHandState[1], 0);
                            setHandFalse();
                            return;
                        };
                    };
                    if (g_mouseX>513+(Xtmp*i) && g_mouseX<583+(Xtmp*i) && 
                        g_mouseY>64+(Ytmp*j) && g_mouseY<134+(Ytmp*j) && rightMyt) {
                        if (landBoardState[j][i].type==mytHandState[2].type || 
                            landBoardState[j][i].type == "Nlights") {
                            UserCanDiscard = false;
                            mytCardCheck(mytHandState[2], 0);
                            setHandFalse();
                            return;
                        };
                    };
                };
            };
        };

        //Allows the User to change what cards are on the board and switch them out for 
        //those in his hand
        if (g_mouseX>513 && g_mouseX<888 && g_mouseY>64 && g_mouseY<439 && 
            startingSpace == true && protectorBoardState[0].landSwitch < 2 &&
            !((leftMyt) || (middleMyt) || (rightMyt)) && 
            (((uppLeftLand) && !(uppRightLand) && !(downLeftLand) && !(downRightLand))||
            (!(uppLeftLand) && (uppRightLand) && !(downLeftLand) && !(downRightLand)) ||
            (!(uppLeftLand) && !(uppRightLand) && (downLeftLand) && !(downRightLand)) ||
            (!(uppLeftLand) && !(uppRightLand) && !(downLeftLand) && (downRightLand)))
             && !shouldEndTurn) {
            var Xtmp = 75;
            for (var i = 0; i < 5; i++) {
                var Ytmp = 75;
                for (var j = 0; j < 5; j++) {
                    if (g_mouseX>513+(Xtmp*i) && g_mouseX<583+(Xtmp*i) && 
                        g_mouseY>64+(Ytmp*j) && g_mouseY<134+(Ytmp*j) &&
                        (uppLeftLand && !uppRightLand && !downLeftLand && !downRightLand)){
                        UserCanDiscard = false;
                        protectorBoardState[0].landSwitch++;
                        drawLands(true, j, i);
                        setHandFalse();
                        return;
                    };
                    if (g_mouseX>513+(Xtmp*i) && g_mouseX<583+(Xtmp*i) && 
                        g_mouseY>64+(Ytmp*j) && g_mouseY<134+(Ytmp*j) &&
                        (!uppLeftLand && uppRightLand && !downLeftLand && !downRightLand)){
                        UserCanDiscard = false;
                        protectorBoardState[0].landSwitch++;
                        drawLands(true, j, i);
                        setHandFalse();
                        return;
                    };
                    if (g_mouseX>513+(Xtmp*i) && g_mouseX<583+(Xtmp*i) && 
                        g_mouseY>64+(Ytmp*j) && g_mouseY<134+(Ytmp*j) && 
                        (!uppLeftLand && !uppRightLand && downLeftLand && !downRightLand)){
                        UserCanDiscard = false;
                        protectorBoardState[0].landSwitch++;
                        drawLands(true, j, i);
                        setHandFalse();
                        return;
                        };
                    if (g_mouseX>513+(Xtmp*i) && g_mouseX<583+(Xtmp*i) && 
                        g_mouseY>64+(Ytmp*j) && g_mouseY<134+(Ytmp*j) &&
                        (!uppLeftLand && !uppRightLand && !downLeftLand && downRightLand)){
                        UserCanDiscard = false;
                        protectorBoardState[0].landSwitch++;
                        drawLands(true, j, i);
                        setHandFalse();
                        return;
                    };
                };
            };
        };

        //Checks if the User has done his selected bonuscard
        if (g_mouseX>1010 && g_mouseX<1110 && g_mouseY>75 && g_mouseY<225 && startingSpace && 
            bonusCardBoardState[0].owner != protectorBoardState[0].type && !shouldEndTurn) {
            UserCanDiscard = false;
            bonusCardCheck(bonusCardBoardState[0], 0, 0);
        };
        if (g_mouseX>1010 && g_mouseX<1110 && g_mouseY>275 && g_mouseY<425 && startingSpace && 
            bonusCardBoardState[1].owner != protectorBoardState[0].type && !shouldEndTurn) {
            UserCanDiscard = false;
            bonusCardCheck(bonusCardBoardState[1], 0, 1);
        };
        if (g_mouseX>900 && g_mouseX<1000 && g_mouseY>75 && g_mouseY<225 && startingSpace && 
            bonusCardBoardState[2].owner != protectorBoardState[0].type && !shouldEndTurn) {
            UserCanDiscard = false;
            bonusCardCheck(bonusCardBoardState[2], 0, 2);
        };
        if (g_mouseX>900 && g_mouseX<1000 && g_mouseY>275 && g_mouseY<425 && startingSpace && 
            bonusCardBoardState[3].owner != protectorBoardState[0].type && !shouldEndTurn) {
            UserCanDiscard = false;
            bonusCardCheck(bonusCardBoardState[3], 0, 3);
        };

        //Allows the User to move his pawn from its starting position
        if (g_mouseX>513 && g_mouseX<888 && g_mouseY>64 && g_mouseY<439 && !shouldEndTurn &&
            startingSpace == true && !((leftMyt) || (middleMyt) || (rightMyt)) &&
            !( uppLeftLand || uppRightLand || downLeftLand || downRightLand)) {
            var Xtmp = 75;
            for (var i = 0; i < 5; i++) {
                var Ytmp = 75;
                for (var j = 0; j < 5; j++) {
                    if (g_mouseX>513+(Xtmp*i) && g_mouseX<583+(Xtmp*i) && 
                        g_mouseY>64+(Ytmp*j) && g_mouseY<134+(Ytmp*j) && 
                        protectorBoardState[0].movement < 3) {
                        if (playerMoved(i, j)) {
                            UserCanDiscard = false;
                            movePlayerPawn(Xtmp, Ytmp, i, j, 0);
                            return;
                        };
                    };
                };
            };
        };
        
        //Allows the user to end his/her turn
        if (g_mouseX>1150 && g_mouseX<1300 && g_mouseY>180 && g_mouseY<330 && 
            startingSpace && playerTurn && !UserCanDiscard) {
            playerTurn = false;
            setHandFalse();
            shouldEndTurn = false;
        };
	};
};


//This is just to see at all times where the mouse is located
function handleMouseMove(evt) {

    g_mouseX = evt.clientX - g_canvas.offsetLeft;
    g_mouseY = evt.clientY - g_canvas.offsetTop;
 
};

// Handle "down" and "move" events the same way.
window.addEventListener("mouseup", handleMouse);
window.addEventListener("mousemove", handleMouseMove);
