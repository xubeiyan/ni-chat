import BatteryIcon from './battery/BatteryIcon.jsx';
import CellularIcon from './cellular/CellularIcon.jsx';

import wifiIcon from "../../assets/statusBar/signal_wifi.svg";
import vpn from "../../assets/statusBar/vpn_key.svg";

const style = {
  height: '1em',
}

const rightPartStyle = {
  display: 'flex',
  alignItems: 'center'
}

const RightPart = ({battery, cellular}) => {

  return (
    <span style={rightPartStyle}>
      <img style={{...style, paddingRight: '.2em'}} src={vpn} />
      <img style={style} src={wifiIcon} />
      <CellularIcon celluar={cellular}/>
      <BatteryIcon battery={battery}/>
    </span>
  );
};

export default RightPart;
