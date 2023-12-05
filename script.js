const words = ["gato", "perro", "colegio", "elefante", "casa", "programacion", "examen", "cuchara"];
let selectedWord = getRandomWord();
let guessedWord = Array(selectedWord.length).fill('_');
let remainingGuesses = 6;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function updateDisplay() {
    document.getElementById('word-display').textContent = guessedWord.join(' ');
    document.getElementById('remaining-guesses').textContent = remainingGuesses;
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toLowerCase();

    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
        document.getElementById('message').textContent = 'Ingresa una letra válida.';
        return;
    }

    if (selectedWord.includes(guess)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === guess) {
                guessedWord[i] = guess;
            }
        }
    } else {
        remainingGuesses--;
    }

    checkGameStatus();
    updateDisplay();
    guessInput.value = '';
}

function checkGameStatus() {
    if (remainingGuesses === 0) {
        document.getElementById('message').textContent = '¡Perdiste! La palabra correcta era: ' + selectedWord;
        resetGame();
    } else if (!guessedWord.includes('_')) {
        document.getElementById('message').textContent = '¡Felicidades! Has adivinado la palabra.';
        resetGame();
    }
}

function resetGame() {
    selectedWord = getRandomWord();
    guessedWord = Array(selectedWord.length).fill('_');
    remainingGuesses = 6;
    document.getElementById('message').textContent = '';
    updateDisplay();
}

updateDisplay();
