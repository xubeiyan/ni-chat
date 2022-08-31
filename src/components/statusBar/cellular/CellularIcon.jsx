import cellularIcon0 from "../../../assets/statusBar/signal_cellular0.svg";
import cellularIcon1 from "../../../assets/statusBar/signal_cellular1.svg";
import cellularIcon2 from "../../../assets/statusBar/signal_cellular2.svg";
import cellularIcon3 from "../../../assets/statusBar/signal_cellular3.svg";
import cellularIcon4 from "../../../assets/statusBar/signal_cellular4.svg";
import cellularIconNoInternet from "../../../assets/statusBar/signal_cellular_no_internet.svg";

const style = {
    height: '1em',
}

const wirelessStyle = {
    fontSize: 'small',
    fontWeight: 500,
    padding: '0 .1em'
}

const CellularIcon = ({ celluar, wirelessGeneration }) => {
    let cellularIconEnum = cellularIconNoInternet;
    if (celluar > 80) cellularIconEnum = cellularIcon4;
    else if (celluar > 60) cellularIconEnum = cellularIcon3;
    else if (celluar > 40) cellularIconEnum = cellularIcon2;
    else if (celluar > 20) cellularIconEnum = cellularIcon1;
    else if (celluar > 0) cellularIconEnum = cellularIcon0;
    else if (celluar == 'noInternet') cellularIconEnum = cellularIconNoInternet;

    let isRenderGenerationIcon = wirelessGeneration !== undefined && wirelessGeneration !== '';
    // console.log(isRenderGenerationIcon)
    return (
        <>
            {isRenderGenerationIcon && <span style={wirelessStyle}>{ wirelessGeneration }</span>}
            <img style={style} src={cellularIconEnum} />
        </>
    )
}

export default CellularIcon;