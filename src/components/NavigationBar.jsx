import HomeButton from './navigationBar/HomeButton';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <span>Back</span>
      <span>
        <HomeButton />
      </span>
      <span>Recent</span>
    </div>
  )
}

export default NavigationBar;