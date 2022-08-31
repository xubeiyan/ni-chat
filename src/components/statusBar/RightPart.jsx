import BatteryIcon from './battery/BatteryIcon.jsx';
import CellularIcon from './cellular/CellularIcon.jsx';
import WifiIcon from './wifi/WifiIcon.jsx';

import vpn from "../../assets/statusBar/vpn_key.svg";

const style = {
  height: '1em',
}

const rightPartStyle = {
  display: 'flex',
  alignItems: 'center'
}

const RightPart = ({
  battery, cellular, wirelessGeneration, wifi, wifiConnected
}) => {

  return (
    <span style={rightPartStyle}>
      <img style={{ ...style, paddingRight: '.2em' }} src={vpn} />
      <WifiIcon wifi={wifi} wifiConnected={wifiConnected} />
      <CellularIcon celluar={cellular} wirelessGeneration={wirelessGeneration} />
      <BatteryIcon battery={battery} />
    </span>
  );
};

export default RightPart;
