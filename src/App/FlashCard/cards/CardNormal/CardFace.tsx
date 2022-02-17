import { Card } from "data/Card";
import { ComponentProps } from "react";
import { useTranslationStore } from "stores/translations";

type Props = {
  card: Card
} & ComponentProps<'div'>


const CardFace = (props: Props) => {
  const { card, ...rest } = props;
  const className = "card " + (rest.className ?? "");
  const translations = useTranslationStore();

  if (card.id) {

  }
  // fallback (old configs)
  return (
    <div {...rest} className={className}>
      {rest.className === "back" && card.text && (
        <div className="text">
          {translations.getText(card.text)}
        </div>
        )}
      <div
        style={{ backgroundImage: 'url(' + card.image + ')' }}
        className='image'
      />
      {rest.className === "back" && card.subtext1 && (
        <div className="subtext">
          {translations.getText(card.subtext1)}
        </div>
        )}
      { rest.className === "back" && card.subtext2 &&
      (<div className="subtext">
        {translations.getText(card.subtext2)}
       </div>
      )}
    </div>
  )
}

export default CardFace
