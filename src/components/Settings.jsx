import './Settings.css';
import { MULTI_MODE } from "../Const";
import { Size } from "./Size";
import { RowSize } from "./RowSize";
import { Complexity } from "./Complexity";
import { Mode } from "./Mode";
import {ISettings} from './interface/ISettings';

/**
 * Game settings component
 * @param {ISettings} props component options
 */
export function Settings(props) {
    const complexity = props.mode === MULTI_MODE ? null : <Complexity
        disabled={props.disabled}
        complexity={props.complexity} 
        onComplexityChanged={props.onComplexityChanged}
    />

    return (<div className="Settings"> 
                <div className="Settings-size">
                    <Size
                        disabled={props.disabled}
                        size={props.size}
                        onSizeChanged={props.onSizeChanged}
                    />
                </div>
                <div className="Settings-rowSize">
                    <RowSize
                        disabled={props.disabled}
                        size={props.size}
                        rowsize={props.rowsize}
                        onRowSizeChanged={props.onRowSizeChanged}
                    />
                </div>
                <div className="Settings-mode">
                    <Mode
                        disabled={props.disabled}
                        mode={props.mode}
                        onModeChanged={props.onModeChanged}
                    />
                </div>
                <div className="Settings-complexity">
                    {complexity}
                </div>
            </div>)
}