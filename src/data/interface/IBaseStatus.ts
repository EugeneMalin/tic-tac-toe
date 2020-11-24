/**
 * Интерфейс базового сотояния получаемого о поле
 * Позволяет получить данные о победе
 */
export interface IBaseStatus {
    hasWin: boolean;
    winLine?: number[][];
}
