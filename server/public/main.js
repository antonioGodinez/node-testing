let SpeechToText = require('speech-to-text');

const onAnythingSaid = text => console.log(`OnAnythingSaid: ${text}`);
const onFinalised = text => console.log(`OnFinalised: ${text}`);

try {
    const listener = new SpeechToText.default(onAnythingSaid, onFinalised);
    listener.startListening();
} catch(error) {
    console.log(error);
} 