import { ReactComponent as PlayIcon } from './../../images/icons/play-24px.svg';
import './styles/buttonBar.scss';

interface Props {
  onPlay: () => void 
}

const ButtonBarIntro = (props: Props) => {
  const {
    onPlay
  } = props;

  return (
    <div className="button-bar">
      <button className="button-circle" onClick={onPlay}>
        <PlayIcon />
      </button>
    </div>
  )
}

export default ButtonBarIntro;