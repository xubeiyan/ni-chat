import PhoneStatusBar from "./PhoneStatusBar";
import ChatTitle from "./ChatTitle";
import ChatBody from "./ChatBody";
import MessageBar from "./MessageBar";
import NavigationBar from "./NavigationBar";

import "./Main.css";
import { useState } from "react";

const Main = () => {
  // 手机型号，决定status bar的样式
  const [phoneType, setPhoneType] = useState("default");

  const roundRadiusStyle = {
    borderRadius: "2em",
    minHeight: "700px",
    width: `${(700 * 9) / 16}px`,
  };
  return (
    <div className="main-container" style={roundRadiusStyle}>
      <PhoneStatusBar
        type={phoneType}
        wifi={60} wifiConnected={true} cellular={'noInternet'}
        battery={78} wirelessGeneration="EDGE" />
      <ChatTitle name="雪雪" />
      <ChatBody />
      <MessageBar />
      <NavigationBar />
    </div>
  );
};

export default Main;
