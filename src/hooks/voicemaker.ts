import axios from "axios";
import { Howl } from "howler";
import { useCallback } from "react";

type Response = {
  success: boolean
  path: string
}

const useVoicemaker = (lang: string) => {
  const speak = useCallback(async (text: string) => {
    const headers = {
      'content-type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_VOICEMAKER_API_KEY}`,
    }
    const data = {
      // "Engine": "neural",
      // "VoiceId": "ai3-Jony",
      // "LanguageCode": "en-US",
      // "Text": "Welcome to the Air.",
      Engine: "neural",
      VoiceId: "ai3-Jony",
      LanguageCode: lang,
      Text: text,
      OutputFormat: "mp3",
      SampleRate: "48000",
      Effect: "default",
      MasterSpeed: "0",
      MasterVolume: "0",
      MasterPitch: "0"
    }
    // console.log(JSON.stringify(body))
    const response = await axios.post<Response>('https://developer.voicemaker.in/voice/api', data, {
      headers: headers
    })
    if (response.data.success) {
      const { path } = response.data;
      const howl = new Howl({
        src: [path]
      });

      howl.play();
    }
  }, [lang]);

  return {
    speak
  }
}

export default useVoicemaker;

// const sendRequest = (url: string, method: string, body: unknown, headers: Headers) => {
//   const options = {
//       method: method,
//       headers,
//       mode: 'no-cors' as RequestMode,
//       body: JSON.stringify(body)
//   };

//   return fetch(url, options);
// }
