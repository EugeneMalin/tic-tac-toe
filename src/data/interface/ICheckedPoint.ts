import { IBasePoint } from "./IBasePoint";

/**
 * Интерфейс для описания проверенных точек, возвращает точку с оценкой
 */
export interface ICheckedPoint extends IBasePoint {
    level: number;
}