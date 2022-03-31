import { useMemo } from 'react';
import { useTranslationStore } from 'stores/translations';
import './../styles/flashCard.scss';

type Props = {
  mistakes: number
}



const CardOutro = (props: Props) => {
  const { mistakes } = props;
  const translations = useTranslationStore();

  const mistakeText = useMemo(() => {
    if (mistakes === 0 && !!translations.getText('outro-description-flawless')) return translations.getText('outro-description-flawless');
    return translations.getTextRaw("outro-description")?.replace("{0}", `${mistakes}`);
  }, [mistakes, translations]);
  return (
    <div className='flash-card-wrapper'>
      <div className="card card-outro">
        <h2>
          {translations.getText("outro-header")}
        </h2>
        <div className="outro-description">
          {mistakeText}
        </div>
      </div>
    </div>
  )
};

export default CardOutro
