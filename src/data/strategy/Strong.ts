/**
 * AI третьего уровня, ходит только правльными клетками
 */

import { Field } from "../Field";
import { IStrategy, PointVector } from "../interface/IStratery";
import { Player } from "../Player";
 
export class Strong implements IStrategy {
    getPoint(player: Player, field: Field): PointVector {
        throw('Unimplemented')
    }
}
