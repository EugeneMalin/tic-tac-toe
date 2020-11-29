import { ISetting } from "./ISetting";

/**
 * Row size component options
 */
export interface IRowSize extends ISetting {
    /**
     * Count of win items
     */
    rowsize: number;

    /**
     * Row size change handler
     */
    onRowSizeChanged: (e: Event, rowsize: number) => void;
}