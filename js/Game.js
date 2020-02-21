/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
            this.missed = 0;
            this.phrases = this.createPhrases();
            this.activePhrase = null;
        }
        /**
         * Creates phrases for use in game
         * @return {array} An array of phrases that could be used in the game
         */

    createPhrases() {
            const phrases = [new Phrase('They are here'),
                new Phrase('My precious'),
                new Phrase('Wax on wax off'),
                new Phrase('Hakuna Matata'),
                new Phrase('You talking to me')
            ];
            return phrases;
        }
        /**
         * * Selects random phrase from phrases property 
         * @return {Object} Phrase object chosen to be used 
         */

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    };
    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const divOverlay = document.querySelector('#overlay');
        divOverlay.style.display = 'none';
        const randomPhrase = this.getRandomPhrase();
        randomPhrase.addPhraseToDisplay();
        this.activePhrase = randomPhrase;

    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        return hiddenLetters.length === 0 ? true : false;
    };
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        const hearts = document.querySelector("img[src='images/liveHeart.png']");
        hearts.src = "images/lostHeart.png";

        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver();
        }
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     * Also handles aesthetic of "win" or "lose" pages.
     */
    gameOver(gameWon) {
        const divOverlay = document.querySelector('#overlay');
        const titleDiv = document.querySelector('#overlay div');
        const h1 = document.querySelector('#game-over-message');
        const button = document.querySelector('#btn__reset');
        divOverlay.style.display = '';
        if (this.checkForWin() === true) {
            h1.textContent = 'Congratulations! You won!';
            divOverlay.className = 'win';
            button.textContent = 'Play again!';
            button.className = '';
            titleDiv.className = '';

        } else {
            h1.textContent = 'Sorry! You ran out of lives.';
            divOverlay.className = 'lose';
            button.textContent = 'Try again!';
            button.className = '';
            titleDiv.className = '';


        }
        this.resetGame();
        return gameWon;

    };

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */

    handleInteraction(button) {
            button.disabled = true;
            if (this.activePhrase.checkLetter(button.innerHTML) === true) {
                button.className = 'chosen';
                this.activePhrase.showMatchedLetter(button.innerHTML);
                if (this.checkForWin() === true) {
                    this.gameOver(true);
                }
            } else {
                button.className = 'wrong';
                this.removeLife(true);
            }

        }
        /**
         * Resets the phrase and the keyboard.
         * Resets player's lives.
         */
    resetGame() {
        this.missed = 0;
        const phraseList = document.querySelector('#phrase ul');
        const keyboard = document.querySelectorAll('.keyrow button');
        const newHearts = document.querySelectorAll("img[src='images/lostHeart.png']");
        newHearts.forEach(heart => {
            heart.src = "images/liveHeart.png";
        });
        phraseList.innerHTML = '';
        keyboard.forEach(key => {
            key.classList.remove('wrong');
            key.classList.remove('chosen');
            key.classList.add('key');
            key.disabled = false;
        });

    }

    keyup(event) {
        const keys = document.querySelectorAll('#qwerty .key');
        keys.forEach(key => {
            if (event.key === key.innerText) {
                this.handleInteraction(key);
            }
        });

    }
}