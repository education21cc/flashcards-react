import useSpeechSynthesis from "./speechSynthesis";
import useVoicemaker from "./voicemaker";

const useSpeech = (lang: string) => {
  const speechSynthesis = useSpeechSynthesis(lang); //native API
  const voicemaker = useVoicemaker(lang); // voicemaker fallback

  const speak = (text = '') => {
    if (!speechSynthesis.supported) {
      voicemaker.speak(text);
    } else {
      speechSynthesis.speak({ text });
    }
  };

  const cancel = () => {

  };

  return {
    speak,
    // speaking,
    cancel,
    // voices,
  };
};

export default useSpeech;
