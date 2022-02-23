import axios from "axios";
import { Howl } from "howler";
import { useCallback } from "react";
import { useSoundsStore } from "stores/sounds";

// hardcoded mp3 fallback
const useMP3 = () => {
  const { getSound, setSound } = useSoundsStore();

  const speak = useCallback(async (url: string) => {

    let howl = getSound(url);
    if (!howl) {

      howl = new Howl({
        src: [url]
      });

      setSound(url, howl); // store for retrieval later
    }
    if (howl) {
      howl.play();
    }
  }, [getSound, setSound]);

  return {
    speak
  }
}

export default useMP3;
