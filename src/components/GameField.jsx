import { Point } from "./Point"
import './GameField.css'
import { Button } from "@material-ui/core"
import { Loop } from "@material-ui/icons"
import PanToolIcon from '@material-ui/icons/PanTool';
import { IconButton } from '@material-ui/core';

/**
 * Game field display component
 */
export function GameField(props) {
    const overfull = props.start || (!props.start && !props.available) ? <div className="GameField-overfull"></div> : null;
    const start = props.start ? <Button onClick={() => props.onStartClicked()} color="primary" variant="contained">Start</Button> : null;
    const restart = !props.start && !props.available ? <Button onClick={() => props.onRestartClicked()} color="default" startIcon={<Loop/>} variant="contained">Restart</Button> : null;
    const stop = !props.start && props.available ? <IconButton onClick={() => props.onStopClicked()} color="secondary" variant="contained"><PanToolIcon/></IconButton> : null;
    return (
    <div className={`GameField ${props.className}`}>
        <div className="GameField-field">
            {props.field.map((row, i) => (<div key={`${i}row`} className="GameField-col">
                {row.map((point, j) => {
                    return (<Point key={`${i}x${j}`} className="GameField-point" onClick={(e) => {
                        if (!props.available) {
                            return
                        }
                        props.onPointClicked(e, i, j)
                    }} icon={point.getIcon()} color={point.getColor()}/>)
                })}
                </div>
            ))}    
            {overfull}
        </div>
        <div className="GameField-bottomActions">
            {start}
            {restart}
            {stop}
        </div>
    </div>
    )
}
