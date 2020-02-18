/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




// const phrase = new Phrase('Life is great');
// console.log(`Phrase - phrase: ${phrase.phrase}`);



// const game = new Game();

// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });



// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());


// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
const game = new Game();

const btnReset = document.querySelector('#btn__reset');
btnReset.addEventListener('click', function() {

    game.startGame();
});

const keyboard = document.querySelectorAll('#qwerty .key');

keyboard.forEach(function(key) {
    key.addEventListener('click', function(e) {
        let button = e.target;
        game.handleInteraction(button);
    });
});