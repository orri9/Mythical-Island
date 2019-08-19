// =================
// UPDATE SIMULATION
// =================


/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


//This is mostly just for testing
function updateSimulation() {
    if (shouldSkipUpdate()) return;
    if (music) music2.play();
   	else music2.pause();
}

// Togglable Pause Mode
//
var KEY_PAUSE = 'P'.charCodeAt(0);
var KEY_STEP  = 'O'.charCodeAt(0);

var g_isUpdatePaused = false;

function shouldSkipUpdate() {
    if (eatKey(KEY_PAUSE)) {
        g_isUpdatePaused = !g_isUpdatePaused;
    }
    return g_isUpdatePaused && !eatKey(KEY_STEP);    
}

// =============
// GATHER INPUTS
// =============

function gatherInputs() {
    // Nothing to do here!
    // The event handlers do everything we need
}
