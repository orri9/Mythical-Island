// =================
// RENDER SIMULATION
// =================

/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


//variables to know what window to render
var startmenu = true;
var newGame = false;
var loadGame = false;       //To-Do
var options = false;

var tutorial = false;
var pdfReading = false
var tutorial_video = false; //To-Do
var credits = false;

var twoPlayerGame = false;  
var threePlayerGame = false;//To-Do
var fourPlayerGame = false; //To-Do

//Tells the game if the game is over or not
var gameEnd = false;

//tells the game if it has made a game board or not
var boardDone = false;

//tells the game if the music should be ON/OFF
var music = false;

//The Main Render Function
function renderSimulation(ctx) {
    clearCanvas(ctx);
    
    if (startmenu==true) {
    	renderStartMenu(ctx);
    };
    if (newGame==true) {
    	renderNewGameMenu(ctx);
    };
    if (loadGame==true) {
    	renderLoadGameMenu(ctx);
    };
    if (options==true) {
    	renderOptionsMenu(ctx);
    };
    if (tutorial==true) {
    	renderTutorialMenu(ctx);
    };
    if (credits==true) {
    	renderCreditsMenu(ctx);
    };
    if (pdfReading==true) {
        renderTurotialPdf(ctx);
    };
    if (twoPlayerGame==true) {
    	renderTwoPlayerGame(ctx);
    };
    if (threePlayerGame==true) {
    	renderThreePlayerGame(ctx);
    };
    if (fourPlayerGame==true) {
    	renderFourPlayerGame(ctx);
    };
    if (gameEnd==true) {
        gameEndRender(ctx);
    };
}


//Rendering the StartMenu
function renderStartMenu(ctx) {

    renderMenuLogo(ctx);
	drawCenteredString(ctx, "NewGame", "40px bold Arial",280);	//NewGame
	drawCenteredString(ctx, "LoadGame", "40px bold Arial",320);	//LoadGame
	drawCenteredString(ctx, "Options", "40px bold Arial",360);	//Options
	drawCenteredString(ctx, "Tutorial", "40px bold Arial",400);	//Tutorial
	drawCenteredString(ctx, "Credits", "40px bold Arial",440);	//Credits

}

//Rendering the NewGameMenu 
function renderNewGameMenu(ctx) {

	drawCenteredString(ctx, "NewGame", "60px bold Arial",250); 
	drawCenteredString(ctx, "2 player game", "40px bold Arial",360); 
	drawCenteredString(ctx, "3 player game", "40px bold Arial",400); 
	drawCenteredString(ctx, "4 player game", "40px bold Arial",440); 	

	renderMenuLogo(ctx);
	renderBackButton(ctx);
}

//Rendering the LoadGameMenu
//To-do
function renderLoadGameMenu(ctx) {

	drawCenteredString(ctx, "LoadGame", "60px bold Arial",250); 
	drawCenteredString(ctx, "Comming soon", "40px bold Arial",360); 
	drawCenteredString(ctx, "Still under constructions", "40px bold Arial",400);

	renderMenuLogo(ctx);
	renderBackButton(ctx);
}

//Rendering the OptionsMenu
function renderOptionsMenu(ctx) {

	drawCenteredString(ctx, "Options", "60px bold Arial",250); 

    drawCenteredString(ctx, "Computer Difficulty: " + cpdiff, "40px bold Arial",360); 
    drawCenteredString(ctx, "Music:", "40px bold Arial",400); 
    drawCenteredString(ctx, "Language: " + language, "40px bold Arial",440); 

    if (language == "English") {
        ctx.drawImage(g_images.britFlag, 860, 410, 60, 30);
    }

    renderMusicLogo(ctx);
	renderMenuLogo(ctx);
	renderBackButton(ctx);
}

//Rendering The TutorialSelectionMenu
//To-do: add the video/make a video to add here
function renderTutorialMenu(ctx) {


	drawCenteredString(ctx, "Tutorial", "60px bold Arial",250); 

    drawCenteredString(ctx, "Learn By Reading", "40px bold Arial",360); 
    drawCenteredString(ctx, "Learn By Doing", "40px bold Arial",440);
    /*
    drawCenteredString(ctx, "Learn By Watching", "40px bold Arial",400); 
    */

	renderMenuLogo(ctx);
	ctx.drawImage(g_images.earthPawn, 840, 410, 30,40);
    renderBackButton(ctx);
}

//Rendering The Credits
function renderCreditsMenu(ctx) {

	drawCenteredString(ctx, "Credits", "60px bold Arial",195); 

    drawCenteredString(ctx, "Game Design:", "40px bold Arial",240); 
    drawCenteredString(ctx, "Svavar Björgvinsson", "30px bold Arial",280);
     drawCenteredString(ctx, "Graphic Design:", "40px bold Arial",320); 
    drawCenteredString(ctx, "Thalia Brückner", "30px bold Arial",360);
    drawCenteredString(ctx, "Game Development:", "40px bold Arial",400); 
    drawCenteredString(ctx, "Svavar Björgvinsson", "30px bold Arial",440);
    drawCenteredString(ctx, "Monika Brzková", "30px bold Arial",475);
    drawCenteredString(ctx, "Coder:", "40px bold Arial",515);
    drawCenteredString(ctx, "Orri Leví Úlfarsson", "30px bold Arial",555); 
   	
    renderMenuLogo(ctx);
	renderBackButton(ctx);
}
        
//Renders a Booklet of the rules for the game for the user to flip through
function renderTurotialPdf(ctx){

    renderBackButton(ctx);
    ctx.drawImage(g_images.Gamiagames, 10, 640, 150,33);

    if (tutorialpage < 0 || tutorialpage > 8) {
        tutorialpage = 0;
    };
    if (tutorialpage == 0) {
        ctx.drawImage(rulesBooklet[0], 297, 30);
        ctx.drawImage(g_images.arrowRight,1130, 233, 235,235);
    };
    if (tutorialpage == 8) {
        ctx.drawImage(rulesBooklet[15], 694, 30);
        ctx.drawImage(g_images.arrowLeft, 30, 233, 235,235);
    };
    if (tutorialpage > 0 && tutorialpage < 8) {
        ctx.drawImage(rulesBooklet[tutorialpage+tutorialpage-1], 297, 30);
        ctx.drawImage(rulesBooklet[tutorialpage+tutorialpage], 694, 30); 
        ctx.drawImage(g_images.arrowLeft, 30, 233, 235,235);
        ctx.drawImage(g_images.arrowRight, 1130, 233, 235,235);
    };
    if (tutorialpage == 2 || tutorialpage == 3) {
        drawCenteredString(ctx, "Sadly the protectors powers don't work in this version" + 
                            " of the game, however you still get extra points for " +
                            "mythical cards completed that match your protector", 
                                "20px bold Arial", 695);;
    };

    drawCenteredString(ctx, "Click the left and right arrows to flip through the rules", 
                                "20px bold Arial", 20);
}


//Renders a TwoPlayerGame
function renderTwoPlayerGame(ctx) {

	renderGameBoard(ctx);
    renderBackButton(ctx);
    renderBackToOptions(ctx);
    renderEndTurnButton(ctx);

}

//Renders a ThreePlayerGame
//To-do: Add a third player
function renderThreePlayerGame(ctx) {

    renderGameBoard(ctx);

    renderBackButton(ctx);
    
    renderBackToOptions(ctx);

    ctx.font = "20px bold Arial";
    ctx.fillText("End Your Turn?",1160,175);

    ctx.drawImage(g_images.arrowRight, 1150, 180, 150,150);

	drawCenteredString(ctx, "ThreePlayerGame", "60px bold Arial",250); 
    drawCenteredString(ctx, "Comming soon", "60px bold Arial",300); 
}

//Renders a FourPlayerGame
//To-do: Add a four player
function renderFourPlayerGame(ctx) {

    renderGameBoard(ctx);

    renderBackButton(ctx);

    renderBackToOptions(ctx);

    ctx.font = "20px bold Arial";
    ctx.fillText("End Your Turn?",1160,175);
    ctx.drawImage(g_images.arrowRight, 1150, 180, 150,150);

	drawCenteredString(ctx, "FourPlayerGame", "60px bold Arial",250);
    drawCenteredString(ctx, "Comming soon", "60px bold Arial",300); 
}

//Render end game screen
function gameEndRender(ctx){
    if (protectorBoardState[1].points > protectorBoardState[0].points) {
        drawCenteredString(ctx, "YOU LOST!!!", "60px bold Arial",0);
        drawCenteredString(ctx, "YOU LOST!!!", "60px bold Arial",100);
        drawCenteredString(ctx, "YOU LOST!!!", "60px bold Arial",200);
        drawCenteredString(ctx, "YOU LOST!!!", "60px bold Arial",300);
        drawCenteredString(ctx, "YOU LOST!!!", "60px bold Arial",400);
        drawCenteredString(ctx, "YOU LOST!!!", "60px bold Arial",500);
        drawCenteredString(ctx, "YOU LOST!!!", "60px bold Arial",600);
        drawCenteredString(ctx, "YOU LOST!!!", "60px bold Arial",700);
    };
    if (protectorBoardState[1].points < protectorBoardState[0].points) {
        drawCenteredString(ctx, "YOU WIN!!!", "60px bold Arial",0);
        drawCenteredString(ctx, "YOU WIN!!!", "60px bold Arial",100);
        drawCenteredString(ctx, "YOU WIN!!!", "60px bold Arial",200);
        drawCenteredString(ctx, "YOU WIN!!!", "60px bold Arial",300);
        drawCenteredString(ctx, "YOU WIN!!!", "60px bold Arial",400);
        drawCenteredString(ctx, "YOU WIN!!!", "60px bold Arial",500);
        drawCenteredString(ctx, "YOU WIN!!!", "60px bold Arial",600);
        drawCenteredString(ctx, "YOU WIN!!!", "60px bold Arial",700);
    };
    if (protectorBoardState[1].points == protectorBoardState[0].points) {
        drawCenteredString(ctx, "It's a tie!!!", "60px bold Arial",0);
        drawCenteredString(ctx, "It's a tie!!!", "60px bold Arial",100);
        drawCenteredString(ctx, "It's a tie!!!", "60px bold Arial",200);
        drawCenteredString(ctx, "It's a tie!!!", "60px bold Arial",300);
        drawCenteredString(ctx, "It's a tie!!!", "60px bold Arial",400);
        drawCenteredString(ctx, "It's a tie!!!", "60px bold Arial",500);
        drawCenteredString(ctx, "It's a tie!!!", "60px bold Arial",600);
        drawCenteredString(ctx, "It's a tie!!!", "60px bold Arial",700);
    };
}


//==============
//Some render functions
//==============

//Renders the four pictures in the corners of the menu.
function renderMenuLogo(ctx) {

    var bonusDeckState = [
                        g_images.Air_Menu, g_images.Air_Menu2,
                        g_images.Fire_Menu, g_images.Fire_Menu2,
                        g_images.Earth_Menu, g_images.Earth_Menu2,
                        g_images.Water_Menu, g_images.Water_Menu2
                    ];

    ctx.drawImage(bonusDeckState[randAir], 20, 20, 200,200);
    ctx.drawImage(bonusDeckState[randFire], 20, 480, 200, 200);
    ctx.drawImage(bonusDeckState[randEarth], 1180, 20, 200, 200);
    ctx.drawImage(bonusDeckState[randWater], 1180, 480, 200, 200);
    ctx.drawImage(g_images.logoClean, 520, 10,421,151);
    ctx.drawImage(g_images.Gamiagames, 400, 566, 600,134);

}

//Renders button to go back to menu
function renderBackButton(ctx){
    ctx.font = "20px bold Arial";
    ctx.fillText("Back To Main Menu",20,20);
    ctx.drawImage(g_images.backIcon, 0, 0, 20,25);
}


//Renders button to go to options
function renderBackToOptions(ctx){
    ctx.font = "20px bold Arial";
    ctx.fillText("Back To The Options Menu",1135,20);
    ctx.drawImage(g_images.options, 1108, 3, 20,20);
    ctx.drawImage(g_images.arrowRight, 1370, 3, 20,20);
}

//Renders button to end the users turn
function renderEndTurnButton(ctx){
    if (!shouldEndTurn && playerTurn) {
        ctx.drawImage(g_images.arrowRight, 1150, 180, 150,150);
        if (startingSpace) {
            ctx.font = "20px bold Arial";
            ctx.fillText("You have moved: " + protectorBoardState[0].movement + "/3", 
                        1145, 350);
            ctx.font = "20px bold Arial";
            ctx.fillText("You have switched: " + protectorBoardState[0].landSwitch + 
                        "/2 lands", 1125, 370);
            if (UserCanDiscard) {
                ctx.font = "20px bold Arial";
                ctx.fillText("You Can Discard Cards", 1135, 390);
            };
            if (!UserCanDiscard) {
                ctx.font = "20px bold Arial";
                ctx.fillText("End Your Turn?",1160,175);
                ctx.font = "20px bold Arial";
                ctx.fillText("Now You Can Not Discard", 1135, 390);
            };
        }
    };
    if (shouldEndTurn) {
        ctx.font = "20px bold Arial";
        ctx.fillText("Click Here",1175,155);
        ctx.fillText("To End Your Turn",1150,175);
        ctx.drawImage(g_images.arrowRightIn, 1150, 180, 150,150);
    };
    if (!playerTurn) {
        ctx.font = "20px bold Arial";
        ctx.fillText("Waiting For",1175,155);
        ctx.fillText("Computer To Finish",1150,175);
        ctx.drawImage(g_images.arrowRightIn, 1150, 180, 150,150);
    };
}

//Renders the music ON/OFF button for the options menu
function renderMusicLogo(ctx){

    if (music) {
        ctx.drawImage(g_images.musicOn, 765, 375, 30,30);
    };
    if (!music) {
        ctx.drawImage(g_images.musicOff, 765, 375, 30,30);
    };
}