import useSpeechSynthesis from "./speechSynthesis";
import useMP3 from "./useMP3";
import useVoicemaker from "./voicemaker";

const useSpeech = (lang: string) => {
  const speechSynthesis = useSpeechSynthesis(lang); //native API
  const mp3 = useMP3(); // voicemaker fallback

  const speak = (text = '', url = '') => {
    if (!speechSynthesis.supported) {
      mp3.speak(url);
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
