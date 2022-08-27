import Time from "./statusBar/Time";
import RightPart from './statusBar/RightPart';

function PhoneStatusBar({wifi, battery, cellular}) {
  const style = {
    padding: '.5em 1em',
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={style}>
      <Time />
      <RightPart wifi={wifi} battery={battery} cellular={cellular}/>
    </div>
  );
}

export default PhoneStatusBar;
