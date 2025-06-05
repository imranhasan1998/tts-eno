// hello
import { populateVoiceList } from './populate-drop-down-list-via-voice-list.js';



// Wait for the HTML document to finish loading
document.addEventListener('DOMContentLoaded', function () {
    // Append elements to the body of the HTML document
    [pageHeading(), inputTxt(), rateContainer(), pitchContainer(), voiceSelect]
        .forEach(el => document.body.appendChild(el));

});


// //we capture references to all the DOM elements involved in the UI

// Create Heading element
const pageHeading = () => {
    const e = document.createElement('h1');
    e.innerHTML = "Speech synthesizer";
    return e;
}

// Create inputText element
const inputTxt = () => {
    const e = document.createElement('input');
    e.type = 'text';
    e.value = 'hello from text content';
    return e;
}

// Create rate container
const rateContainer = () => {
    let container = document.createElement('div');
    let rateInput = document.createElement('input');
    rateInput.id = 'rate'; //for relating label
    rateInput.type = 'range';
    rateInput.min = 0.5;
    rateInput.max = 2;
    rateInput.step = 0.1;
    rateInput.value = 1.0;
    let rateLabel = document.createElement('label');
    rateLabel.htmlFor = 'rate';
    rateLabel.textContent = 'Rate';
    let rateValue = document.createElement('div');
    rateValue.className = 'rate-value';
    rateValue.textContent = '1';
    let clearfix1 = document.createElement('div');

    // Append elements to the container
    container.appendChild(rateLabel);
    container.appendChild(rateInput);
    container.appendChild(rateValue);
    container.appendChild(clearfix1);

    // updates the rate values displayed in the UI, each time the slider positions are moved.
    rateInput.onchange = () => { rateValue.textContent = rateInput.value; };

    return container;
}

// Create rate container
const pitchContainer = () => {
    let container = document.createElement('div');
    let pitchInput = document.createElement('input');
    pitchInput.id = 'pitch'; //for relating label
    pitchInput.type = 'range';
    pitchInput.min = 0.5;
    pitchInput.max = 2;
    pitchInput.step = 0.1;
    pitchInput.value = 1.0;
    let pitchLabel = document.createElement('label');
    pitchLabel.htmlFor = 'pitch';
    pitchLabel.textContent = 'Pitch';
    let pitchValue = document.createElement('div');
    pitchValue.className = 'pitch-value';
    pitchValue.textContent = '1';
    let clearfix1 = document.createElement('div');

    // Append elements to the container
    container.appendChild(pitchLabel);
    container.appendChild(pitchInput);
    container.appendChild(pitchValue);
    container.appendChild(clearfix1);

    // updates the pitch values displayed in the UI, each time the slider positions are moved.
    pitchInput.onchange = () => { pitchValue.textContent = pitchInput.value; };

    return container;
}


//create blank drop down
const voiceSelect = document.createElement('select');



// capturing a reference to Window.speechSynthesis as entry point — it returns an instance of SpeechSynthesis, the controller interface for web speech synthesis.
const synth = window.speechSynthesis;



//Some older browsers immediately return a list of voices when you call SpeechSynthesis.getVoices(). Other browsers (e.g., recent versions of Chrome) don't immediately have the complete list of voices, but trigger an event called voiceschanged when the voices have finished loading. So, need to register populateVoiceList() as a callback function for onvoiceschanged event(if the browser loads voices after onvoiceschanged event) so that only after the voices becomes available, function gets called to populate the list.
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

export {synth, voiceSelect};



// //start speaking using an onsubmit handler
// inputForm.onsubmit = (event) => {
//     event.preventDefault();

//     const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
//     const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
//     for (const voice of voices) {
//         if (voice.name === selectedOption) {
//             utterThis.voice = voice;
//         }
//     }
//     utterThis.pitch = pitch.value;
//     utterThis.rate = rate.value;
//     synth.speak(utterThis);
//     utterThis.onpause = (event) => {
//         const char = event.utterance.text.charAt(event.charIndex);
//         console.log(
//             `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
//         );
//     };
//     inputTxt.blur();
// };


