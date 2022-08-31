import wifi0 from "../../../assets/statusBar/wifi0.svg";
import wifi_bad from "../../../assets/statusBar/wifi_bad.svg";

const style = {
    height: '1em',
}

const WifiIcon = ({wifi, wifiConnected}) => {
    let wifiIconEnum = wifi_bad;
    return (
        wifiConnected ? <img style={style} src={wifiIconEnum} /> : null
    )
}

export default WifiIcon