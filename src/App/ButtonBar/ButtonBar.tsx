import { ReactComponent as FlipIcon } from './../../images/flip-24px.svg';
import { ReactComponent as ThumbsDownIcon } from './../../images/icons/thumb-down-24px.svg';
import { ReactComponent as ThumbsUpIcon } from './../../images/icons/thumb-up-24px.svg';
import './styles/buttonBar.scss';

interface Props {
  enableLeftAndRight?: boolean
  onLeftClick: () => void 
  onFlip: () => void 
  onRightClick: () => void 
}

const ButtonBar = (props: Props) => {
  const {
    enableLeftAndRight = false,
    onLeftClick,
    onFlip,
    onRightClick
  } = props;

  return (
    <div className="button-bar">
      {enableLeftAndRight && (
        <button className="button-circle" onClick={onLeftClick}>
          <ThumbsDownIcon />
        </button>
      )}
      <button className="button-circle button-small" onClick={onFlip}>
        <FlipIcon />
      </button>
      {enableLeftAndRight && (
        <button className="button-circle" onClick={onRightClick}>
          <ThumbsUpIcon />
        </button>
      )}
    </div>
  )
}

export default ButtonBar;