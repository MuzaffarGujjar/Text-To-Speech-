// Check if the browser supports the SpeechSynthesis API
if ('speechSynthesis' in window) {
    const synthesis = window.speechSynthesis;

    function convertTextToSpeech() {
        const inputText = document.getElementById('inputText').value;

        if (inputText.trim() !== '') {
            // Create a SpeechSynthesisUtterance object
            const utterance = new SpeechSynthesisUtterance(inputText);

            // Speak the text
            synthesis.speak(utterance);
        }
    }
} else {
    alert('Your browser does not support the SpeechSynthesis API. Please use a modern browser.');
}
