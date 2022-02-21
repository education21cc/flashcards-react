import { useCallback } from "react";

const useVoicemaker = (lang: string) => {
  const speak = useCallback(async (text: string) => {
    const headers = new Headers({
      'content-type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_VOICEMAKER_API_KEY}`,
    })
    const body = {
      "Engine": "neural",
      "VoiceId": "ai3-Jony",
      "LanguageCode": "en-US",
      "Text": "Welcome to the Air.",
      "OutputFormat": "mp3",
      "SampleRate": "48000",
      "Effect": "default",
      "MasterSpeed": "0",
      "MasterVolume": "0",
      "MasterPitch": "0"
      // Engine: "neural",
      // VoiceId: "ai3-Jony",
      // LanguageCode: lang,
      // Text: text
    }
    console.log(JSON.stringify(body))
    const response = await sendRequest('https://developer.voicemaker.in/voice/api', 'POST', body, headers);
    const json = await response.text();
    console.log(json)
  }, [lang]);

  return {
    speak
  }
}

export default useVoicemaker;

const sendRequest = (url: string, method: string, body: unknown, headers: Headers) => {
  const options = {
      method: method,
      headers,
      mode: 'no-cors' as RequestMode,
      body: JSON.stringify(body)
  };

  return fetch(url, options);
}
