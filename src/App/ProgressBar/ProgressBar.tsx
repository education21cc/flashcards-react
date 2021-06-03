import './styles/progressBar.scss';
import { ReactComponent as SchoolIcon } from './images/school-24px.svg';

interface Props {
  progress: number;
}

const ProgressBar = (props: Props) => {
  const { progress } = props;
  const width = 20 + progress * 80; // minimum width is 20%

  return (
    <div className="progress-bar">
      <div className="track" style={{ width: `calc(${width}%)`}}/>
      <SchoolIcon className="icon" />
    </div>
  )
}

export default ProgressBar;