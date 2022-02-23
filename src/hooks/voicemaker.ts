import axios from "axios";
import { Howl } from "howler";
import { useCallback } from "react";
import { useSoundsStore } from "stores/sounds";

type Response = {
  success: boolean
  path: string
}

const voiceIds: { [key: string]: string } = {
  "en-GB": "ai1-Amy",
  "hi-IN": "ai2-hi-IN-Dhru",
  "nl-NL": "ai3-nl-NL-Colette",
  "es-ES": "ai3-es-ES-Alvaro",
  // if other voices needeed, see https://developer.voicemaker.in/apidocs
}

// unused atm
const useVoicemaker = (lang: string) => {
  const { getSound, setSound } = useSoundsStore();

  const speak = useCallback(async (text: string) => {
    const key = `${lang}-${text}`;

    let howl = getSound(key);
    if (!howl) {
      if (!voiceIds[lang]) {
        throw new Error(`No voiceId found for language ${lang}`);
      }

      const headers = {
        'content-type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_VOICEMAKER_API_KEY}`,
      }

      const data = {
        Engine: "neural",
        VoiceId: voiceIds[lang],
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
        howl = new Howl({
          src: [path]
        });

        setSound(key, howl); // store for retrieval later
      }
    }
    if (howl) {
      howl.play();
    }
  }, [getSound, lang, setSound]);

  return {
    speak
  }
}

export default useVoicemaker;
