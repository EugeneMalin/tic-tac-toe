import { IBase } from "./IBase";

/**
 * Base setting inteface
 */
export interface ISetting extends IBase {
    /**
     * Component avaibility
     */
    disabled: boolean;
}
