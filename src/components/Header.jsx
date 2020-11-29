import './Header.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import { useState } from "react";
import { Settings } from "./Settings";
import {IHeader} from './interface/IHeader'

/**
 * Application header component
 * @param {IHeader} props component options
 */
export function Header(props) {
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
                    <Settings
                        disabled={props.disabled}
                        size={props.size}
                        rowsize={props.rowsize}
                        mode={props.mode}
                        complexity={props.complexity}
                        onSizeChanged={props.onSizeChanged}
                        onRowSizeChanged={props.onRowSizeChanged}
                        onModeChanged={props.onModeChanged}
                        onComplexityChanged={props.onComplexityChanged}
                    />
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

