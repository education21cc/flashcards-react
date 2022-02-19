import { MouseEvent, ReactNode, useMemo } from "react";
import { ElementContent } from "react-markdown/lib/ast-to-react";

type Props = {
  children: ReactNode[]
  lang?: string
};

const Voice = (props: Props) => {
  const { children, lang } = props;

  const text = useMemo(() => {
    if (typeof children[0] === 'string') {
      return children[0] as string
    }
  }, [children]);

  const handleClick = (e: MouseEvent<HTMLButtonElement> ) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.speak(
        new SpeechSynthesisUtterance(text)
      )
    }
    e.stopPropagation();
  }
  return (
    <button onClick={handleClick}>
      hi
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
