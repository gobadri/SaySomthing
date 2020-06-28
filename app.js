const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition(); 

recognition.onstart = function () {
    console.log('voice is activated, you can talk');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


btn.addEventListener('click', () => {
    recognition.start();
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what you said but I know that Islam loves Lulu';
    speech.volume = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}