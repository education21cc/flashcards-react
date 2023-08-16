import useSpeechSynthesis from "./speechSynthesis"
import useMP3 from "./useMP3"

const useSpeech = (lang: string) => {
  const speechSynthesis = useSpeechSynthesis(lang) // native API
  const mp3 = useMP3() // mp3 voice fallback

  const speak = (text = '', url = '') => {
    if (!speechSynthesis.supported || !speechSynthesis.speak({ text })) {
      mp3.speak(url)
    }
  }

  const cancel = () => {

  }

  return {
    speak,
    // speaking,
    cancel,
    // voices,
  }
}

export default useSpeech
