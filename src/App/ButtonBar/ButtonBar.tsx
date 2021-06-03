import './styles/buttonBar.scss';
import { ReactComponent as FlipIcon } from './images/flip-24px.svg';
import { ReactComponent as ThumbsDownIcon } from './images/thumb-down-24px.svg';
import { ReactComponent as ThumbsUpIcon } from './images/thumb-up-24px.svg';

interface Props {
  onLeftClick: () => void 
  onRightClick: () => void 
}

const ButtonBar = (props: Props) => {
  const {
    onLeftClick,
    onRightClick
  } = props;

  return (
    <div className="button-bar">
      <button className="button-circle" onClick={onLeftClick}>
        <ThumbsDownIcon />
      </button>
      <button className="button-circle button-small" >
        <FlipIcon />
      </button>
      <button className="button-circle" onClick={onRightClick}>
        <ThumbsUpIcon />
      </button>
    </div>
  )
}

export default ButtonBar;