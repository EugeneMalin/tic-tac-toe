import { Field } from "../Field";
import { Player } from "../Player";

/**
 * Интерфейс элемента автоматического или удаленного элемента
 */
export interface IStrategy {
    /**
     * Получение "хода" стратегией
     * @param field ссылка на игровое поле
     */
    getPoint(player: Player, field: Field): PointVector
}

export type PointVector = [number, number];
