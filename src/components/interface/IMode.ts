import { ISetting } from "./ISetting";

/**
 * Mode component interface
 */
export interface IMode extends ISetting {
    /**
     * Key name of mode
     */
    mode: string;

    /**
     * Mode change handler
     */
    onModeChanged: (e: Event, mode: string) => void;
}