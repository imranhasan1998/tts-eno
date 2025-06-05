import { synth, voiceSelect } from './tts.js';


function populateVoiceList() {

    let voices = [];
    //We first invoke SpeechSynthesis.getVoices(), which returns a list of all the available voices, represented by SpeechSynthesisVoice objects.
    voices = synth.getVoices();

    for (const voice of voices) {
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`;

        // if (voice.default) {
        //     option.textContent += " — DEFAULT";
        // }

        option.setAttribute("data-lang", voice.lang);
        option.setAttribute("data-name", voice.name);
console.log(voiceSelect());
        
        voiceSelect.appendChild(option);
    }
}

export {populateVoiceList};
