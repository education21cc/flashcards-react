import { useCallback, useEffect, useMemo, useState } from "react"

type SpeechArgs = {
  text: string,
  rate?: number,
  pitch?: number,
  volume?: number
}

// native speech sythesis API
const useSpeechSynthesis = (lang: string) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [speaking, setSpeaking] = useState(false)
  const [supported, setSupported] = useState(false)

  const processVoices = (voiceOptions: SpeechSynthesisVoice[]) => {
    setVoices(voiceOptions)
  }

  const getVoices = useCallback(() => {
    // Firefox seems to have voices upfront and never calls the
    // voiceschanged event
    let voiceOptions = window.speechSynthesis.getVoices()
    if (voiceOptions.length > 0) {
      processVoices(voiceOptions)
      return
    }
  }, [])

  const voice = useMemo(() => {
    if (!voices) return null
    return voices.find(v => v.lang === lang) ?? null
  }, [lang, voices])

  useEffect(() => {

    const voicesChanged = (event: any) => {
      let voiceOptions = event.target?.getVoices()
      processVoices(voiceOptions)
    }
    if (supported) {
      if (window.speechSynthesis.addEventListener) {
        window.speechSynthesis.addEventListener("voiceschanged", voicesChanged)
      }
    }
    return () => {
      if (window.speechSynthesis.removeEventListener) {
        window.speechSynthesis.removeEventListener("voiceschanged", voicesChanged)
      }
    }
  }, [supported])

  const handleEnd = () => {
    setSpeaking(false)
    // onEnd()
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      setSupported(true)
      getVoices()
    }
  }, [getVoices])

  const speak = ({ text = '', rate = 1, pitch = 1, volume = 1 }: SpeechArgs) => {
    if (!supported || !voice) return false
    setSpeaking(true)

    // Firefox won't repeat an utterance that has been
    // spoken, so we need to create a new instance each time
    const utterance = new window.SpeechSynthesisUtterance()
    utterance.text = text
    utterance.voice = voice
    utterance.onend = handleEnd
    utterance.rate = rate
    utterance.pitch = pitch
    utterance.volume = volume
    window.speechSynthesis.speak(utterance)

    return true
  }

  const cancel = () => {
    if (!supported) return
    setSpeaking(false)
    window.speechSynthesis.cancel()
  }

  return {
    supported,
    speak,
    speaking,
    cancel,
    voices,
  }
}

export default useSpeechSynthesis
