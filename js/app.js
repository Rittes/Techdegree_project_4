/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Adds moving effects to the title page, before game starts
 */
const titleDiv = document.querySelector('#overlay div');
titleDiv.className = 'moveRight';

/** Starts new game */
const game = new Game();

const btnReset = document.querySelector('#btn__reset');
btnReset.addEventListener('click', function() {

    game.startGame();
});

/** Click handler for onscreen keyboard*/

const keyboard = document.querySelectorAll('.key');
keyboard.forEach(key => {
    key.addEventListener('click', function(e) {
        const button = e.target;
        game.handleInteraction(button);
    });
});