/**
 * Интерфейс для работы с AI
 */

 import { Field } from "../Field";

export interface IStrategy {
    /**
     * Получение "хода" стратегией
     * @param field ссылка на игровое поле
     */
    getPoint(field: Field): PointVector
}

export type PointVector = [number, number, number];
