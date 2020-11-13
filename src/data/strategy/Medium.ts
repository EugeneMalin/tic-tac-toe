/**
 * AI второго уровня анализирует поле, но ходит не самым эффективным образом
 */

import { Field } from "../Field";
import { IStrategy, PointVector } from "../interface/IStratery";
 
export class Medium implements IStrategy {
    getPoint(field: Field): PointVector {
        throw('Unimplemented')
    }
}
