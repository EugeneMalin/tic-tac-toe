/**
 * AI нулевого уровня, не анализирует поле и бъет наугад
 */

 
import { Field } from "../Field";
import { IStrategy, PointVector } from "../interface/IStratery";
import { Point } from "../Point";
 
export class Weak implements IStrategy {
    getPoint(field: Field): PointVector {
        if (!field.isActive()) {
            throw(new Error('Игра уже завершилась!'))
        }
        const points: Point[] = [];
        field.each((item: Point) => {
            if (item.isClickable()) {
                points.push(item);
            }
        });

        const point: Point = points[Math.floor(Math.random() * points.length)];

        return [point.x, point.y];
    }
}
