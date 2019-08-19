// ===============
// Mythical_Island
// ===============


/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//=======================================================================================
//ATTENTION! Some of this code is reused code originally made by Patrick Kerr a professor 
//at Háskóli Íslands for the class Tölvuleikjaforritun(TÖL308G) autumn 2017. Almost all 
//of this code has been changed somewhat and this code was given to my as apart of an 
//assignment when I was in that class. Most of this code was not even complete when I 
//originally got it. However the imagesPreload.js is taken directly from there and was 
//not changed in any way.
//
//Secondly this game was made in part with the help of the people at Gamiagames™. They 
//own almost all assets used in this game and the game design it self. The song was 
//taken from NCS(No Copiright Sounds) and all other assets are owned by Lilja Kristín 
//Svavarsdóttir. Gamiagames™ are currently working on publishing this game as a board 
//game if you are intrested in their work you can see their homepage at 
//"http://gamiagames.com/" and if you are intrested in this board game you can see its 
//progress "http://gamiagames.com/mythical-island/" and 
//"https://www.indiegogo.com/projects/mythical-island#/"
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//=======================================================================================

"use strict";

var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");

//Just to see if loading images is done this makes the game a little bit slower on
//startup but gives less errors and makes all parts of the game come in at the same time
var preload = false;

// ========
// MAINLOOP
// ========

//This is the main loop of the program
function mainIter() {
    if (preload) {
        if (!requestedQuit()) {
            gatherInputs();
            updateSimulation();
            renderSimulation(g_ctx);
        } else {
            window.clearInterval(intervalID);
        }
    }
}

// =============
// PRELOAD STUFF
// =============

//Holds all images for the program
var g_images = {};

var music2;

function requestPreloads() {

    //preloading music
    music2 = new Audio("./sounds/Piano.mp3");

    //preloading the images
    var requiredImages = {
        Air_Menu    :"./sprites/Protector_Cards/Protector_Griffin.png",
        Fire_Menu   :"./sprites/Protector_Cards/Protector_Fire_Giant.png",
        Earth_Menu  :"./sprites/Protector_Cards/Protector_EarthGiantpsd.png",
        Water_Menu  :"./sprites/Protector_Cards/Protector_water_goddess2.png",
        Air_Menu2   :"./sprites/Protector_Cards/Protector_Winged horse.png",
        Fire_Menu2  :"./sprites/Protector_Cards/Protector_Icelandic_Dragon.png",
        Earth_Menu2 :"./sprites/Protector_Cards/Protector_earth_goddess2.png",
        Water_Menu2 :"./sprites/Protector_Cards/Protector_Bull.png",

        air			: "./sprites/land_Cards/air.png",
        fire		: "./sprites/land_Cards/fire.png",
        earth		: "./sprites/land_Cards/earth.png",
        water		: "./sprites/land_Cards/water.png",
        nlights     : "./sprites/land_Cards/nlights.png", 
        landCardBack:"./sprites/land_Cards/Land_Cards_Back.png",
        mytCardBack :"./sprites/Mythical_Cards/Mythical_Cards_Back.png",

        bonusCard1  : "./sprites/Bonus_Cards/Bonus_1.png",
        bonusCard2  : "./sprites/Bonus_Cards/Bonus_2.png",
        bonusCard3  : "./sprites/Bonus_Cards/Bonus_3.png",
        bonusCard4  : "./sprites/Bonus_Cards/Bonus_4.png",
        bonusCard5  : "./sprites/Bonus_Cards/Bonus_5.png",
        bonusCard6  : "./sprites/Bonus_Cards/Bonus_6.png",
        bonusCard7  : "./sprites/Bonus_Cards/Bonus_7.png",
        bonusCard8  : "./sprites/Bonus_Cards/Bonus_8.png",
        bonusCard9  : "./sprites/Bonus_Cards/Bonus_9.png",
        bonusCard10 : "./sprites/Bonus_Cards/Bonus_10.png",
        bonusCard11 : "./sprites/Bonus_Cards/Bonus_11.png",
        bonusCard12 : "./sprites/Bonus_Cards/Bonus_12.png",
        bonusCard13 : "./sprites/Bonus_Cards/Bonus_13.png",
        bonusCard14 : "./sprites/Bonus_Cards/Bonus_14.png",
        bonusCard15 : "./sprites/Bonus_Cards/Bonus_15.png",
        bonusCard16 : "./sprites/Bonus_Cards/Bonus_16.png",
        bonusCard17 : "./sprites/Bonus_Cards/Bonus_17.png",
        bonusCard18 : "./sprites/Bonus_Cards/Bonus_18.png",
        bonusCard19 : "./sprites/Bonus_Cards/Bonus_19.png",
        bonusCard20 : "./sprites/Bonus_Cards/Bonus_20.png",

        airCard1    : "./sprites/Mythical_Cards/Air_Card_1.png",
        airCard2    : "./sprites/Mythical_Cards/Air_Card_2.png",
        airCard3    : "./sprites/Mythical_Cards/Air_Card_3.png",
        airCard4    : "./sprites/Mythical_Cards/Air_Card_4.png",
        airCard5    : "./sprites/Mythical_Cards/Air_Card_5.png",
        airCard6    : "./sprites/Mythical_Cards/Air_Card_6.png",
        airCard7    : "./sprites/Mythical_Cards/Air_Card_7.png",

        earthCard1    : "./sprites/Mythical_Cards/Earth_Card_8.png",
        earthCard2    : "./sprites/Mythical_Cards/Earth_Card_9.png",
        earthCard3    : "./sprites/Mythical_Cards/Earth_Card_10.png",
        earthCard4    : "./sprites/Mythical_Cards/Earth_Card_11.png",
        earthCard5    : "./sprites/Mythical_Cards/Earth_Card_12.png",
        earthCard6    : "./sprites/Mythical_Cards/Earth_Card_13.png",
        earthCard7    : "./sprites/Mythical_Cards/Earth_Card_14.png",

        fireCard1    : "./sprites/Mythical_Cards/Fire_Card_15.png",
        fireCard2    : "./sprites/Mythical_Cards/Fire_Card_16.png",
        fireCard3    : "./sprites/Mythical_Cards/Fire_Card_17.png",
        fireCard4    : "./sprites/Mythical_Cards/Fire_Card_18.png",
        fireCard5    : "./sprites/Mythical_Cards/Fire_Card_19.png",
        fireCard6    : "./sprites/Mythical_Cards/Fire_Card_20.png",
        fireCard7    : "./sprites/Mythical_Cards/Fire_Card_21.png",

        waterCard1    : "./sprites/Mythical_Cards/Water_Card_22.png",
        waterCard2    : "./sprites/Mythical_Cards/Water_Card_23.png",
        waterCard3    : "./sprites/Mythical_Cards/Water_Card_24.png",
        waterCard4    : "./sprites/Mythical_Cards/Water_Card_25.png",
        waterCard5    : "./sprites/Mythical_Cards/Water_Card_26.png",
        waterCard6    : "./sprites/Mythical_Cards/Water_Card_27.png",
        waterCard7    : "./sprites/Mythical_Cards/Water_Card_28.png",

        airProtector1 : "./sprites/Protector_Cards/Air_Griffin.png",
        airProtector2 : "./sprites/Protector_Cards/Air_Hourse.png",
        earthProtector1 : "./sprites/Protector_Cards/Earth_Gaia.png",
        earthProtector2 : "./sprites/Protector_Cards/Earth_Giant.png",
        fireProtector1 : "./sprites/Protector_Cards/Fire_Dragon.png",
        fireProtector2 : "./sprites/Protector_Cards/Fire_Giant.png",
        waterProtector1 : "./sprites/Protector_Cards/Water_Bull.png",
        waterProtector2 : "./sprites/Protector_Cards/Water_Gaia.png",

        airPawn     : "./sprites/Protector_Cards/Air_Pawn.png",
        earthPawn   : "./sprites/Protector_Cards/Earth_Pawn.png",
        firePawn    : "./sprites/Protector_Cards/Fire_Pawn.png",
        waterPawn   : "./sprites/Protector_Cards/Water_Pawn.png",

        airPuck     : "./sprites/Protector_Cards/Air_Puck.png",
        earthPuck   : "./sprites/Protector_Cards/Earth_Puck.png",
        firePuck    : "./sprites/Protector_Cards/Fire_Puck.png",
        waterPuck   : "./sprites/Protector_Cards/Water_Puck.png",

        tutorial1    :"./sprites/Rules/Tutorial_1.png",
        tutorial2    :"./sprites/Rules/Tutorial_2.png",
        tutorial3    :"./sprites/Rules/Tutorial_3.png",
        tutorial4    :"./sprites/Rules/Tutorial_4.png",
        tutorial5    :"./sprites/Rules/Tutorial_5.png",
        tutorial6    :"./sprites/Rules/Tutorial_6.png",
        tutorial7    :"./sprites/Rules/Tutorial_7.png",
        tutorial8    :"./sprites/Rules/Tutorial_8.png",
        tutorial9    :"./sprites/Rules/Tutorial_9.png",
        tutorial10   :"./sprites/Rules/Tutorial_10.png",
        tutorial11   :"./sprites/Rules/Tutorial_11.png",
        tutorial12   :"./sprites/Rules/Tutorial_12.png",
        tutorial13   :"./sprites/Rules/Tutorial_13.png",
        tutorial14   :"./sprites/Rules/Tutorial_14.png",
        tutorial15   :"./sprites/Rules/Tutorial_15.png",
        tutorial16   :"./sprites/Rules/Tutorial_16.png",

        backIcon    :"./sprites/back.png",
        arrowLeft   :"./sprites/arrow_left.png",
        arrowRight  :"./sprites/arrow_right.png",
        arrowRightIn:"./sprites/arrow_right_invert.png",
        musicOff    :"./sprites/music_off.png",
        musicOn     :"./sprites/music_on.png",
        options     :"./sprites/options.png",
        britFlag    :"./sprites/English.jpg",
        logoClean   :"./sprites/Mythical_Island-logo_clean.png",
        smallBoard  :"./sprites/Board5x5.png",
        largeBoard  :"./sprites/Board6x6.png",
        Gamiagames  :"./sprites/gamia_games_logo.jpg"
    };

    imagesPreload(requiredImages, g_images, preloadDone);
}

//Just for error handling
function preloadDone() {
    preload = true;
    //console.log("Preloading Images Done");
}


// Kick off the program
requestPreloads();


// This is how we set it all up, by requesting a recurring periodic
// "timer event" which we can use as a kind of "heartbeat" for our game.
var intervalID = window.setInterval(mainIter, 16.666);

window.focus();

