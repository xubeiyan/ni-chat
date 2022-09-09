import './StatusBarStyle.css'; 

const Time = ({hours, minutes}) => {
    if (hours == undefined) hours = new Date().getHours();
    if (minutes == undefined) minutes = new Date().getMinutes();


    let hourText = hours < 10 ? `0${hours}` : `${hours}`;
    let minutesText = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return (
        <span className='status-bar-text'>{hourText}:{minutesText}</span>
    )
}

export default Time;