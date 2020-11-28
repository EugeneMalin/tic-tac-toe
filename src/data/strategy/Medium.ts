/**
 * AI второго уровня анализирует поле, но ходит не самым эффективным образом
 */

import { Analyzer } from "../Analyzer";
import { Field } from "../Field";
import { IStrategy, PointVector } from "../interface/IStratery";
import { Player } from "../Player";
import { Weak } from "./Weak";
 
export class Medium extends Weak implements IStrategy {
    getPoint(player: Player, field: Field): PointVector {
        const attackPoints = Analyzer.getAttackPoints(player, {
            size: field.size,
            rowSize: field.rowSize,
            points: field.points
        }).sort((pointA, pointB) => pointB.level - pointA.level);

        if (attackPoints.length > 0) {
            return [attackPoints[0].x, attackPoints[0].y];
        }
        
        return super.getPoint(player, field);

    }
}
