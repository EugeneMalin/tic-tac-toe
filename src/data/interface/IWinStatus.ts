/**
 * Interface of win status
 */
export interface IWinStatus {
    /**
     * Sing of winner
     */
    hasWin: boolean;
    /**
     * Win line on field
     */
    winLine?: number[][];
}
