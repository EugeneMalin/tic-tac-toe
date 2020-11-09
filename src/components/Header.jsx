/**
 * Application header component
 */

import { Complexity } from "./Complexity";
import { Mode } from "./Mode";
import './Header.css'
import { MULTI_MODE } from "../Const";
import { Size } from "./Size";

export function Header(props) {
    return (
        <header className={`Header ${props.className}`}>
            <h1 className="Header-title">TIC TAC TOE</h1>
            <Mode
                disabled={true}
                className="Header-mode"
                mode={props.mode}
                onModeChanged={props.onModeChanged}
            />
            <Complexity
                disabled={props.mode === MULTI_MODE}
                className="Header-complexity"
                complexity={props.complexity} 
                onComplexityChanged={props.onComplexityChanged}
            />
            <Size
                className="Header-size"
                size={props.size}
                onSizeChanged={props.onSizeChanged}
            />
        </header>
    )
}

