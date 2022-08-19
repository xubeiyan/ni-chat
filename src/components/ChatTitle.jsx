import './ChatTitle.css';

const ChatTitle = ({name}) => {
    return (
        <div className="chat-title">
            <span>←</span>
            <span>{ name }</span>
            <span>...</span>
        </div>
    )
}

export default ChatTitle;