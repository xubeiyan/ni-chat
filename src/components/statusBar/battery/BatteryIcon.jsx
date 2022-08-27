import batteryIcon0 from "../../../assets/statusBar/battery0.svg";
import batteryIcon1 from "../../../assets/statusBar/battery1.svg";
import batteryIcon2 from "../../../assets/statusBar/battery2.svg";
import batteryIcon3 from "../../../assets/statusBar/battery3.svg";
import batteryIcon4 from "../../../assets/statusBar/battery4.svg";
import batteryIcon5 from "../../../assets/statusBar/battery5.svg";
import batteryIcon6 from "../../../assets/statusBar/battery6.svg";
import batteryIcon7 from "../../../assets/statusBar/battery7.svg";
import batteryIconCharging from "../../../assets/statusBar/battery_charging.svg";

const BatteryIcon = ({ battery, showNumber }) => {
  let batteryIconEnum = batteryIcon0;

  if (battery >= 95) batteryIconEnum = batteryIcon7;
  else if (battery >= 80) batteryIconEnum = batteryIcon6;
  else if (battery >= 75) batteryIconEnum = batteryIcon5;
  else if (battery >= 60) batteryIconEnum = batteryIcon4;
  else if (battery >= 45) batteryIconEnum = batteryIcon3;
  else if (battery >= 30) batteryIconEnum = batteryIcon2;
  else if (battery >= 15) batteryIconEnum = batteryIcon1;
  else if (battery >= 0) batteryIconEnum = batteryIcon0;
  else if (battery == "charge") batteryIconEnum = batteryIconCharging;

  showNumber = true;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img style={{ height: "1em" }} src={batteryIconEnum} />
      {showNumber ? (
        <span
          style={{ fontSize: "small", fontWeight: "500" }}
        >
          {battery}%
        </span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default BatteryIcon;
