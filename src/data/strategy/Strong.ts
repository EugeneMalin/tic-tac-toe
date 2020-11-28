/**
 * AI третьего уровня, ходит только правльными клетками
 */

import { Analyzer } from "../Analyzer";
import { Field } from "../Field";
import { IStrategy, PointVector } from "../interface/IStratery";
import { Player } from "../Player";
import { Weak } from "./Weak";
 
export class Strong extends Weak implements IStrategy {
    getPoint(player: Player, field: Field): PointVector {
        const defeatPoints = Analyzer.getDefeatPoints(player, {
            size: field.size,
            rowSize: field.rowSize,
            points: field.points
        });
        const attackPoints = Analyzer.getAttackPoints(player, {
            size: field.size,
            rowSize: field.rowSize,
            points: field.points
        });

        if (defeatPoints.length > 0 && attackPoints.length > 0) {
            // Защита нужна сильнее
            if (defeatPoints[0].level >= attackPoints[0].level) {
                return [defeatPoints[0].x, defeatPoints[0].y];
            }
            return [attackPoints[0].x, attackPoints[0].y];
        }

        if (defeatPoints.length > 0) {
            return [defeatPoints[0].x, defeatPoints[0].y];
        }

        if (attackPoints.length > 0) {
            return [attackPoints[0].x, attackPoints[0].y];
        }

        return super.getPoint(player, field);
    }
}
