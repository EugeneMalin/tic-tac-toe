/**
 * AI нулевого уровня, не анализирует поле и бъет наугад
 */

 
import { Field } from "../Field";
import { IStrategy, PointVector } from "../interface/IStratery";
 
export class Weak implements IStrategy {
    getPoint(field: Field): PointVector {
        throw('Unimplemented')
    }
}
