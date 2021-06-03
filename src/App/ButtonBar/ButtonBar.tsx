import './styles/buttonBar.scss';
import { ReactComponent as FlipIcon } from './images/flip-24px.svg';

interface Props {
}

const ButtonBar = (props: Props) => {
  return (
    <div className="button-bar">
      <button className="button-circle" >
        <FlipIcon />
      </button>
      <button className="button-circle" >
        <FlipIcon />
      </button>
      <button className="button-circle" >
        <FlipIcon />
      </button>
    </div>
  )
}

export default ButtonBar;