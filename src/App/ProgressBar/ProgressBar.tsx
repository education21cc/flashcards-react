import './styles/progressBar.scss';
import { ReactComponent as SchoolIcon } from './images/school-24px.svg';

interface Props {
  progress: number;
}

const ProgressBar = (props: Props) => {
  const { progress } = props;
  return (
    <div className="progress-bar">
      <div className="track" style={{ width: `${progress * 100}%`}}/>
      <SchoolIcon className="icon" />
    </div>
  )
}

export default ProgressBar;