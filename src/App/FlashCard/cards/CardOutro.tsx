import React, { createRef, forwardRef, useImperativeHandle, useRef, useState } from "react"
import { Swipeable, direction } from "../Swipeable";
import {Howl} from 'howler';
import { useTranslationStore } from 'stores/translations';
import './../styles/flashCard.scss';

type Props = {
  mistakes: number
} 



const CardOutro = (props: Props) => {
  const { mistakes } = props;
  const translations = useTranslationStore();

  const mistakeText = translations.getTextRaw("outro-description")?.replace("{0}", `${mistakes}`);
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