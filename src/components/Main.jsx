import PhoneStatusBar from "./PhoneStatusBar";
import ChatTitle from "./ChatTitle";

import './Main.css';

const Main = () => {
    return (
        <div className="main-container">
            <PhoneStatusBar />
            <ChatTitle name="随便写点"/>
        </div>
    )
}

export default Main;