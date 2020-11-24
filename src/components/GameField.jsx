/**
 * Game field display component
 */

import { Point } from "./Point"
import './GameField.css'
import { Button } from "@material-ui/core"
import { Loop } from "@material-ui/icons"
import PanToolIcon from '@material-ui/icons/PanTool';
import { IconButton } from '@material-ui/core';
import { Fragment } from "react";

export function GameField(props) {
    return (
    <Fragment>
        <div className={`GameField ${props.className}`}>
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
            {
                props.start ?
                <div className="GameField-overfull">
                    <Button onClick={() => props.onStartClicked()} color="primary" variant="contained">Start</Button>
                </div>:
                null
            }
            
            {
                !props.start && !props.available ?
                <div className="GameField-overfull">
                    <Button onClick={() => props.onRestartClicked()} color="default" startIcon={<Loop/>} variant="contained">Restart</Button>
                </div>:
                null
            }
        </div>
        {
            !props.start && props.available ?
            <div className="GameField-bottomActions">
                <IconButton onClick={() => props.onStopClicked()} color="secondary" variant="contained"><PanToolIcon/></IconButton>
            </div> :
            null
        }
        
    </Fragment>
    )
}
