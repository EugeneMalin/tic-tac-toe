/**
 * AI четвертого уровня, ходит максимально правильно с учетом максимального вреда сопернику
 */

import { Field } from "../Field";
import { IStrategy, PointVector } from "./IStratery";

export class Effciency implements IStrategy {
    getPoint(field: Field): PointVector {
        throw('Unimplemented')
    }
}
