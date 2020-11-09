/**
 * Game field display component
 */

import { Point } from "./Point"
import './GameField.css'

export function GameField(props) {
    return (<div className={`GameField ${props.className}`}>
        {props.field.map((row, i) => (<div key={`${i}row`} className="GameField-col">
            {row.map((point, j) => {
                return (<Point key={`${i}x${j}`} className="GameField-point" onClick={(e) => {
                    if (!props.field.isActive() || props.field.isFull()) {
                        return
                    }
                    props.onPointClicked(e, i, j)
                }} icon={point.getIcon()} color={point.getColor()}/>)
            })}
            </div>
        ))}
    </div>)
}
