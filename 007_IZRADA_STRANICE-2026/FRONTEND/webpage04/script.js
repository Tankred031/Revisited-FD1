let randomNumber = Math.floor (Math.random() * 100) + 1;
let attempts = 10;

function checkGuess () {
    attempts--;
    const inputElement = document.getElementById('guess');
    const feedbackElement = document.getElementById('feedback');
    let guess = inputElement.value;
    while (attempts > 0) {
        if (randomNumber == guess){
            feedbackElement.innerHTML = "Good guess!";
            feedbackElement.style.color = "green";
        } else if (guess < randomNumber){
            feedbackElement.innerHTML = `Too low! Try again, ${attempts} attempts remaining`
            feedbackElement.style.color = "red"
        } else {
            feedbackElement.innerHTML = `Too high! Try again, ${attempts} attempts remaining`
            feedbackElement.style.color = "red"
            break;
        }
    }
    
    if (attempts === 0 && guess != randomNumber) {
        feedbackElement.innerHTML =
        `Sorry, you're out of attempts! The correct number was ${randomNumber}.`;
        feedbackElement.style.color = "red";
    }
}
    
