import { CompleteOption } from 'data/Content';
import { send } from 'playerBridge';
import { ReactComponent as RewindIcon } from './../../images/icons/rewind-24px.svg';
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
  return (
    <div className="button-bar">
      { hasReset && (
        <button className="button-circle" onClick={onPlay}>
          <RewindIcon />
        </button>
      )}
      { hasExit && (
        <button className="button-circle" onClick={exit}>
          <ExitIcon />
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
