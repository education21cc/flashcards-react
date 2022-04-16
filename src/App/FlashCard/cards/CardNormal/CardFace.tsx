import ReactMarkdown from 'react-markdown';
import directive from 'remark-directive';
import { Card } from "data/Card";
import { ComponentProps } from "react";
import { useTranslationStore } from "stores/translations";
import { reactMarkdownRemarkDirective } from "markdown/reactMarkdownDirective";
import Voice from 'markdown/Voice';

type Props = {
  card: Card
  side: 'front' | 'back'
} & ComponentProps<'div'>


const CardFace = (props: Props) => {
  const { card, side, children, ...rest } = props;
  const className = "card " + (side ?? "");
  const translations = useTranslationStore();

  if (card.id) {
    const content: string = translations.getTextRaw(`card-${card.id}-${side}`) || ""
    return (
      <div {...rest} className={className}>
        <ReactMarkdown
          remarkPlugins={[directive, reactMarkdownRemarkDirective]}
          components={{ voice: Voice }}
        >
          {content}
        </ReactMarkdown>
      </div>
    )
  }

  if (children) {
    return (
      <div {...rest} className={className}>
        {children}
      </div>
    )
  }

  // fallback (old configs)
  return (
    <div {...rest} className={className}>
      {side === "back" && card.text && (
        <div className="text">
          {translations.getText(card.text)}
        </div>
        )}
      <div
        style={{ backgroundImage: 'url(' + card.image + ')' }}
        className='image'
      />
      {side === "back" && card.subtext1 && (
        <div className="subtext">
          {translations.getText(card.subtext1)}
        </div>
        )}
      { side === "back" && card.subtext2 &&
      (<div className="subtext">
        {translations.getText(card.subtext2)}
       </div>
      )}
    </div>
  )
}

export default CardFace
