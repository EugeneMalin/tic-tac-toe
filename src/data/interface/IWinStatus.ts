/**
 * Интерфейс базового сотояния получаемого о поле
 * Позволяет получить данные о победе
 */
export interface IWinStatus {
    hasWin: boolean;
    winLine?: number[][];
}
