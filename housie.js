let selectedNumbers = [];
let pickNext = document.querySelector('#pickNext');
let currentNumber = document.querySelector('#current-number');
let refresh = document.querySelector('#refresh');

pickNext.addEventListener('click', pickNextNumber);
refresh.addEventListener('click', () => {
    window.location.reload();
})

function pickNextNumber() {
    let number = getRandomNumber();
    if (selectedNumbers.includes(number)) {
        pickNextNumber();
    }
    else {
        selectedNumbers.push(number);
    }
    displayAllNumbers();
    currentNumber.innerHTML = number;
    speakNumber(number);

}

function getRandomNumber() {
    let randomNumber = Math.ceil(Math.random() * 90);
    return randomNumber
}

//Numbers
displayAllNumbers();
function displayAllNumbers() {
    let allNumbers = document.querySelector('aside');
    allNumbers.innerHTML = '';
    for (let i = 1; i <= 90; i++) {
        let span = document.createElement('span');
        if (selectedNumbers.includes(i)) {
            span.classList.add('selected-numbers');
        }
        span.innerHTML = i;
        allNumbers.append(span);
    }
}
speakNumber('HELLO')
function speakNumber(number) {
    // Check if the SpeechSynthesis API is available
    if ('speechSynthesis' in window) {
        // Create a new SpeechSynthesisUtterance instance
        var utterance = new SpeechSynthesisUtterance();

        // Set the text to be spoken as the number
        utterance.text = number.toString();

        // Specify the voice configuration
        var voices = speechSynthesis.getVoices();
        var desiredVoice = voices.find(function (voice) {
            return voice.name === 'Google UK English Female';
            // Replace 'Microsoft Zira Desktop' with the desired voice name
        });

        // Set the voice for the utterance
        utterance.voice = desiredVoice;

        // Use the SpeechSynthesis API to speak the number
        speechSynthesis.speak(utterance);
    } else {
        console.log('Speech synthesis is not supported in this browser.');
    }
}