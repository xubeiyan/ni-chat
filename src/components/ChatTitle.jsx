import './ChatTitle.css';

import arrowBack from '../assets/header/arrow_back.svg';
import moreHori from '../assets/header/more_hori.svg';

const ChatTitle = ({name}) => {
    return (
        <div className="chat-title">
            <span className="button-container left">
                <img className="button-left" src={arrowBack}/>
            </span>
            <span className="chat-name">{ name }</span>
            <span className='button-container right'>
                <img className="button-right" src={moreHori} />
            </span>
        </div>
    )
}

export default ChatTitle;