import batteryIcon from "../../assets/statusBar/battery.svg";
import wifiIcon from "../../assets/statusBar/signal_wifi.svg";
import cellularIcon from "../../assets/statusBar/signal_cellular.svg";
import vpn from "../../assets/statusBar/vpn_key.svg";

const style = {
  height: '1em',
}

const RightPart = ({wifi, cellular, battery}) => {
  return (
    <span style={{display: 'flex'}}>
      <img style={{...style, paddingRight: '.2em'}} src={vpn} />
      <img style={style} src={wifiIcon} />
      <img style={style} src={cellularIcon} />
      <img style={style} src={batteryIcon} />
    </span>
  );
};

export default RightPart;
