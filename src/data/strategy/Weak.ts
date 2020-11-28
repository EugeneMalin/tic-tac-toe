/**
 * AI нулевого уровня, не анализирует поле и бъет наугад
 */

 
import { Field } from "../Field";
import { IStrategy, PointVector } from "../interface/IStratery";
import { Player } from "../Player";
import { Point } from "../Point";
 
export class Weak implements IStrategy {
    getPoint(player: Player, field: Field): PointVector {
        if (field.isFull()) {
            throw(new Error('Нет свободного места для хода!'))
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
