import { Field } from "../Field";

/**
 * Интерфейс элемента автоматического или удаленного элемента
 */
export interface IStrategy {
    /**
     * Получение "хода" стратегией
     * @param field ссылка на игровое поле
     */
    getPoint(field: Field): PointVector
}

export type PointVector = [number, number];
