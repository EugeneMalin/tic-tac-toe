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
        });
        const defeatPoints = Analyzer.getDefeatPoints(player, {
            size: field.size,
            rowSize: field.rowSize,
            points: field.points
        });

        if (attackPoints.length > 0 && defeatPoints.length > 0) {
            const isAttack = !!(Math.floor(Math.random() * 2) % 2)
            if (isAttack) {
                const index = Math.floor(Math.random() * attackPoints.length);
                return [attackPoints[index].x, attackPoints[index].y];
            }
            const index = Math.floor(Math.random() * defeatPoints.length);
            return [defeatPoints[index].x, defeatPoints[index].y];
        }
        if (attackPoints.length > 0) {
            const index = Math.floor(Math.random() * attackPoints.length);
            return [attackPoints[index].x, attackPoints[index].y];
        }
        if (defeatPoints.length > 0) {
            const index = Math.floor(Math.random() * defeatPoints.length);
            return [defeatPoints[index].x, defeatPoints[index].y];
        }
        return super.getPoint(player, field);
    }
}
