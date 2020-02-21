/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */

    addPhraseToDisplay() {
        const phraseList = document.querySelector('#phrase ul');
        const item = document.createElement('li');
        this.phrase.split('').forEach(letter => {
            if (letter !== ' ') {
                item.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
                phraseList.append(item);
            } else {
                item.innerHTML += `<li class="space">${letter}</li>`;
            }
        });
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */

    checkLetter(letter) {
        return this.phrase.includes(letter) ? true : false;
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */

    showMatchedLetter(letter) {
        const macthedLetters = document.querySelectorAll('.letter');
        macthedLetters.forEach(macthedLetter => {
            if (macthedLetter.innerHTML === letter) {
                macthedLetter.className = 'show';
            }
        });
    };
}