import useSpeechSynthesis from "hooks/speech";
import { MouseEvent, ReactNode, useMemo } from "react";
import { ElementContent } from "react-markdown/lib/ast-to-react";

type Props = {
  children: ReactNode[]
  lang?: string
};

const Voice = (props: Props) => {
  const { children, lang = "en" } = props;
  const { supported, voices, speak } = useSpeechSynthesis();
// console.log(voices)

  const text = useMemo(() => {
    if (typeof children[0] === 'string') {
      return children[0] as string
    }
    return "";
  }, [children]);

  const voice = useMemo(() => {
    if (!voices) return null;
    return voices.find(v => v.lang === lang) ?? null
  }, [lang, voices])

  console.log(voice)
  const handleClick = (e: MouseEvent<HTMLButtonElement> ) => {
    // console.log('speaking ', lang, voice, 'voices', voices)
    if (supported) {
      speak({ text, voice });
    }
    e.stopPropagation();
  }
  return (
    <button onClick={handleClick}>
      🔊
    </button>
  );
};

export default Voice;


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'voice': ElementContent[]
    }
  }
}
