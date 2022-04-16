import { CompleteOption } from 'data/Content';
import { send } from 'playerBridge';
import { ReactComponent as PlayIcon } from './../../images/icons/play-24px.svg';
import { ReactComponent as ExitIcon } from './../../images/icons/exit-24px.svg';
import './styles/buttonBar.scss';

interface Props {
  onPlay: () => void
  completeOptions: CompleteOption[]
}

const ButtonBarComplete = (props: Props) => {
  const {
    onPlay,
    completeOptions
  } = props;
  const hasReset = completeOptions.indexOf('reset') > -1;
  const hasExit = completeOptions.indexOf('exit') > -1;
console.log(hasReset, hasExit);
  return (
    <div className="button-bar">
      { hasExit && (
        <button className="button-circle" onClick={exit}>
          <ExitIcon />
        </button>
      )}
      { hasReset && (
        <button className="button-circle" onClick={onPlay}>
          <PlayIcon />
        </button>
      )}
    </div>
  )
}

export default ButtonBarComplete;

const exit = () => {
  send({
    type: 'exit'
  });
}
