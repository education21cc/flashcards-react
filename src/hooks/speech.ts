import { useCallback, useEffect, useState } from "react";

type SpeechArgs = {
  text: string,
  voice?: SpeechSynthesisVoice | null,
  rate?: number,
  pitch?: number,
  volume?: number
}

const useSpeechSynthesis = (onEnd = () => {}) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  const processVoices = (voiceOptions: SpeechSynthesisVoice[]) => {
    console.log('processing voices', voiceOptions)
    setVoices(voiceOptions);
  };

  const getVoices = useCallback(() => {
    // Firefox seems to have voices upfront and never calls the
    // voiceschanged event
    let voiceOptions = window.speechSynthesis.getVoices();
    if (voiceOptions.length > 0) {
      processVoices(voiceOptions);
      return;
    }
  }, []);

  useEffect(() => {
    const voicesChanged = (event: any) => {
      let voiceOptions = event.target?.getVoices();
      processVoices(voiceOptions);
    }
    window.speechSynthesis.addEventListener("voiceschanged", voicesChanged);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", voicesChanged);
    }
  }, [])

  const handleEnd = () => {
    setSpeaking(false);
    onEnd();
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      setSupported(true);
      getVoices();
    }
  }, [getVoices]);

  const speak = ({ voice = null, text = '', rate = 1, pitch = 1, volume = 1 }: SpeechArgs) => {
    if (!supported) return;
    setSpeaking(true);
    // Firefox won't repeat an utterance that has been
    // spoken, so we need to create a new instance each time
    const utterance = new window.SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = voice;
    utterance.onend = handleEnd;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    window.speechSynthesis.speak(utterance);
  };

  const cancel = () => {
    if (!supported) return;
    setSpeaking(false);
    window.speechSynthesis.cancel();
  };

  return {
    supported,
    speak,
    speaking,
    cancel,
    voices,
  };
};

export default useSpeechSynthesis;
