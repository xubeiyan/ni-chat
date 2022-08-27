import BatteryIcon from './battery/BatteryIcon.jsx';
import wifiIcon from "../../assets/statusBar/signal_wifi.svg";
import cellularIcon from "../../assets/statusBar/signal_cellular.svg";
import vpn from "../../assets/statusBar/vpn_key.svg";

const style = {
  height: '1em',
}

const RightPart = ({battery}) => {

  return (
    <span style={{display: 'flex'}}>
      <img style={{...style, paddingRight: '.2em'}} src={vpn} />
      <img style={style} src={wifiIcon} />
      <img style={style} src={cellularIcon} />
      <BatteryIcon battery={battery}/>
    </span>
  );
};

export default RightPart;
