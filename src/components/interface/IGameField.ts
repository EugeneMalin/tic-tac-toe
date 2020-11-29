import { Field } from "../../data/Field";
import { IBase } from "./IBase";

/**
 * Game board options interface
 */
export interface IGameField extends IBase {
    /**
     * Sign of game start
     */
    start: boolean;

    /**
     * Sign of game actions avaibility
     */
    available: boolean;

    /**
     * Game field
     */
    field: Field;

    /**
     * Field unit point click handler
     */
    onPointClicked: (e: Event, x: number, y: number) => void;
    
    /**
     * Start button click handler
     */
    onStartClicked: () => void;

    /**
     * Restart button click handler
     */
    onRestartClicked: () => void;

    /**
     * Stop button click handler
     */
    onStopClicked: () => void;
}