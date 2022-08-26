import Time from "./statusBar/Time";
import RightPart from './statusBar/RightPart';

function PhoneStatusBar({ type }) {
  const style = {
    padding: '.5em 1em',
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={style}>
      <Time />
      <RightPart />
    </div>
  );
}

export default PhoneStatusBar;
