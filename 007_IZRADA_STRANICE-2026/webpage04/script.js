let randomNumber = Math.floor (Math.random() * 100) + 1;
function checkGuess () {
    const inputElement = document.getElementById('guess').value;
    const feedbackElement = document.getElementById('feedback');
    let guess = inputElement.value;
    if (randomNumber == guess){
        feedbackElement.innerHTML = "Good guess!";
        feedbackElement.style.color = "green";
    } else if (guess < randomNumber){
        feedbackElement.innerHTML = "Too low!"
        feedbackElement.style.color = "red"
    } else {
        feedbackElement.innerHTML = "Too high!"
        feedbackElement.style.color = "red"
    }
}

    
