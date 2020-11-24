/**
 * AI второго уровня анализирует поле, но ходит не самым эффективным образом
 */

import { Field } from "../Field";
import { IStrategy, PointVector } from "../interface/IStratery";
import { Point } from "../Point";
 
export class Medium implements IStrategy {
    getPoint(field: Field): PointVector {
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
