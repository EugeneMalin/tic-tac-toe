import { Point } from "../Point";

/**
 * Описание характеристик поля
 */

export interface IFieldParams {
    rowSize: number;
    size: number;
    points: Point[][];
}
