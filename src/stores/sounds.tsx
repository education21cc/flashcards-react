import { Howl } from "howler";
import create from "zustand";

type SoundsStore = {
  sounds: {[key: string]: Howl},
  getSound: (key: string) => Howl | undefined
  setSound: (key: string, howl: Howl) => void
}

export const useSoundsStore = create<SoundsStore>(
  (set, get): SoundsStore => ({
    sounds: {},
    getSound: (key: string) => {
      return get().sounds[key]
    },
    setSound: (key: string, howl: Howl) => {
      const { sounds } = get();
      set({
        sounds: {
          ...sounds,
          [key]: howl
        }
      })
    },
  })
)
