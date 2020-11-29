import { ISetting } from "./ISetting";

/**
 * Size component interface
 */
export interface ISize extends ISetting {
    /**
     * Size of field
     */
    size: number;

    /**
     * Size change handler
     */
    onSizeChanged: (e: Event, size: number, rowsize: number) => void;
}