/**
 * AI третьего уровня, ходит только правльными клетками
 */

import { Field } from "../Field";
import { IStrategy, PointVector } from "./IStratery";
 
export class Strong implements IStrategy {
    getPoint(field: Field): PointVector {
        throw('Unimplemented')
    }
}
