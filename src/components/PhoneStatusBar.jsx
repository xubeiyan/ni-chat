import Time from "./statusBar/Time";
import RightPart from './statusBar/RightPart';

const PhoneStatusBar = ({ 
  wifi, 
  battery, 
  cellular, 
  wirelessGeneration,
  wifiConnected
}) => {
  const style = {
    padding: '.5em 1em',
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={style}>
      <Time />
      <RightPart
        battery={battery} cellular={cellular}
        wirelessGeneration={wirelessGeneration} 
        wifi={wifi} wifiConnected={wifiConnected}/>
    </div>
  )
}

export default PhoneStatusBar
