import speakIcon from '../assets/messageBar/speak.svg';

import './MessageBar.css';

const MessageBar = () => {
  return (
    <div className="message-bar">
      <div className='input-switch input-icon-container'>
        <img src={speakIcon} className="switch-icon"/>
      </div>
      <div className="input-text-container">
        <input className="input-text" type="text" />
      </div>
      <div className='input-emoji input-icon-container'>
        <img src={speakIcon} className="switch-icon"/>
      </div>
      <div className='input-plus input-icon-container'>
        <img src={speakIcon} className="switch-icon"/>
      </div>
    </div>
  )
}

export default MessageBar