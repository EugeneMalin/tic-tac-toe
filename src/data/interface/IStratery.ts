import { Field } from "../Field";
import { Player } from "../Player";

/**
 * Interface for getting point of field
 */
export interface IStrategy {
    /**
     * Getting the point
     * @param field 
     */
    getPoint(player: Player, field: Field): PointVector
}

export type PointVector = [number, number];
