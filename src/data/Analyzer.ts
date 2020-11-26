import { IWinStatus } from './interface/IWinStatus';
import { IAttackStatus } from './interface/IAttackStatus';
import {IFieldParams} from './interface/IFieldParams';
import { Player } from './Player';
import { ICheckedPoint } from './interface/ICheckedPoint';

/**
 * Количество направлений для проверки
 * 
 * пример обработки на минимальном размере
 *                     0   1     2
 *          N          +   +   +
 *        NW NE          + + +
 *      W       E      * * % + + 3
 *        SW SE          * * *
 *          S          *   *   *
 * % - это точка соответствующая х и у, относительно которых идет проверка
 */
const DIRECTIONS_COUNT = 4;

export class Analyzer {
    static getWinStatus(x: number, y: number, params: IFieldParams): IWinStatus  {
        let hasWin = false;
        let winLine: number[][] = [];

        for (let dir = 0; dir < DIRECTIONS_COUNT; dir++) {
            if (hasWin) {
                continue
            }
            const lineStatus = this._checkWinLineFor(x, y, dir, params);
            hasWin = lineStatus.hasWin;
            winLine = lineStatus.winLine || [];
        }
        return {hasWin, winLine};
    }

    /**
     * Получение точки для атаки
     * @param player игрок для которого ищем атаку 
     * @param params параметры поля
     */
    static getAttackPoints(player: Player, params: IFieldParams): ICheckedPoint[] {
        // todo нужно реализовать обход всех точек с вызовом _checkAttackLineFor
        return [];
    }

    /**
     * Проверка точки по заданному направлению на возможность атаки
     * @param x положение проверяемой точки по X
     * @param y положение проверяемой точки по У
     * @param direction направление проверки
     * @param params параметры поля
     */
    static _checkAttackLineFor(x: number, y: number, direction: number, params: IFieldParams): IAttackStatus {
        // todo проверка идентичная проверке на победу только для точке которые принадлежат игроку
        // взвешиваются все точки и вес определяется сколькими суммой всего суммой от 1/n где n 
        // количество точек необходимое для победы по заданному направлению
        return {
            hasAttack: false,
            attackPoints: []
        }
    }

    /**
     * Get unit vector for direction
     * 
     * direction | x | y
     *     0     | + | +
     *     1     | 0 | +
     *     2     | - | +
     *     3     | - | 0
     *     4     | - | -
     *     5     | 0 | -
     *     6     | + | -
     *     7     | + | 0
     * 
     * @param {Number} direction direction key
     */
    private static _extractdirectionVector(direction: number) {
        return [
            (direction === 0 || direction === 6 || direction === 7 ?
                1 : (direction === 1 || direction === 5 ? 0 : -1)),
            (direction === 0 || direction === 1 || direction === 2 ? 
                1 : (direction === 3 || direction === 7 ? 0 : -1))
        ]
    }
    
    /**
     * Проверка хода на победность для указанной линии
     * @param x позиция по Х
     * @param y позиция по У
     * @param direction направлеие проверки
     * @param params прочие параметры игрового поля
     */
    private static _checkWinLineFor(x: number, y: number, direction: number, params: IFieldParams): IWinStatus {
        const point = params.points[x][y];
        
        let pointsCount = 0;
        let winLine = [];
        for (let step = - params.rowSize + 1; step < params.rowSize; step++) {
            const [directionX, directionY] = this._extractdirectionVector(direction)
            const newX = x - directionX * step;
            const newY = y - directionY * step;

            if (pointsCount > params.rowSize - 1) {
                continue;
            }

            const pointCur = params.points[newX] && params.points[newX][newY]
            if (pointCur && !pointCur.isClickable() && pointCur.getId() === point.getId()) {
                pointsCount++;
                winLine.push([newX, newY])
            } else {
                pointsCount = 0;
                winLine = []
            }
        }
        return {hasWin: pointsCount > params.rowSize - 1, winLine}
    }
}
