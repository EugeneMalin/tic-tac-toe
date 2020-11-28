/**
 * Application header component
 */

import { Complexity } from "./Complexity";
import { Mode } from "./Mode";
import './Header.css'
import { MULTI_MODE } from "../Const";
import { Size } from "./Size";
import { RowSize } from "./RowSize";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import { useState } from "react";

export function Header(props) {
    const complexity = props.mode === MULTI_MODE ? null : <Complexity
        disabled={props.disabled}
        className="Header-complexity"
        complexity={props.complexity} 
        onComplexityChanged={props.onComplexityChanged}
    />
    const [open, setOpen] = useState(false);

    return (
        <header className={`Header ${props.className}`}>
            <h1 className="Header-title">TIC TAC TOE</h1>
            <IconButton onClick={() => setOpen(!open)}><TuneIcon/></IconButton>
            <Dialog 
                open={open}
            >
                <DialogTitle>Settings</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can set game different game settings
                    </DialogContentText>
                    <div className="Header-settings"> 
                        <div className="Header-size">
                            <Size
                                disabled={props.disabled}
                                size={props.size}
                                onSizeChanged={props.onSizeChanged}
                            />
                        </div>
                        <div className="Header-rowSize">
                            <RowSize
                                disabled={props.disabled}
                                size={props.size}
                                rowsize={props.rowsize}
                                onRowSizeChanged={props.onRowSizeChanged}
                            />
                        </div>
                        <div className="Header-mode">
                            <Mode
                                disabled={props.disabled}
                                mode={props.mode}
                                onModeChanged={props.onModeChanged}
                            />
                        </div>
                        <div className="Header-size">
                            {complexity}
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </header>
    )
}

