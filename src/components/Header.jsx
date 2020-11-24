/**
 * Application header component
 */

import { Complexity } from "./Complexity";
import { Mode } from "./Mode";
import './Header.css'
import { MULTI_MODE } from "../Const";
import { Size } from "./Size";
import { RowSize } from "./RowSize";

export function Header(props) {
    return (
        <header className={`Header ${props.className}`}>
            <h1 className="Header-title">TIC TAC TOE</h1>
            <Size
                className="Header-size"
                disabled={props.disabled}
                size={props.size}
                onSizeChanged={props.onSizeChanged}
            />
            <RowSize
                disabled={props.disabled}
                className="Header-rowSize"
                size={props.size}
                rowSize={props.rowsize}
                onRowSizeChanged={props.onRowSizeChanged}
            />
            <Mode
                disabled={props.disabled}
                className="Header-mode"
                mode={props.mode}
                onModeChanged={props.onModeChanged}
            />
            <Complexity
                disabled={props.mode === MULTI_MODE || props.disabled}
                className="Header-complexity"
                complexity={props.complexity} 
                onComplexityChanged={props.onComplexityChanged}
            />
        </header>
    )
}

