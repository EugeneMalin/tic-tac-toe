import { IWinStatus } from './interface/IWinStatus';
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
        const result: ICheckedPoint[] = []
        params.points.forEach((row) => {
            row.forEach((point) => {
                if (point.player) {
                    return;
                }
                const weight = this._getPointWeignt(point.x, point.y, player.getId(), params);
                if (weight > 0) {
                    result.push({
                        x: point.x,
                        y: point.y,
                        level: weight
                    });
                }
            }) 
        })
        return result.sort((pointA, pointB) => pointB.level - pointA.level);
    }

    /**
     * Получение точек для обороны
     * @param player игрок
     * @param params параметры поля
     */
    static getDefeatPoints(player: Player, params: IFieldParams): ICheckedPoint[] {
        const result: ICheckedPoint[] = []
        params.points.forEach((row) => {
            row.forEach((point) => {
                if (point.player) {
                    return;
                }
                const weight = this._getPointWeignt(point.x, point.y, player.getId(), params, false);
                if (weight > 0) {
                    result.push({
                        x: point.x,
                        y: point.y,
                        level: weight
                    });
                }
            }) 
        })
        return result.sort((pointA, pointB) => pointB.level - pointA.level);
    }

    /**
     * Получение веса точки для указанного пользователя
     * @param x положение проверяемой точки по X
     * @param y положение проверяемой точки по У
     * @param id идентификатор пользователя
     * @param params параметры поля
     * @param isUsers признак проверки относительно пользователя
     */
    private static _getPointWeignt(x: number, y: number, id: number, params: IFieldParams, isUsers: boolean = true): number {        
        const weights: number[] = [];
        const halfRowSize = Math.round(params.rowSize / 2)
        for (let dir = 0; dir < DIRECTIONS_COUNT; dir++) {
            let lineWeight = 0;
            let lineUnreachablePoints = 0;
            for (let step = - halfRowSize; step < halfRowSize + 1; step++) {
                const [directionX, directionY] = this._extractdirectionVector(dir)
                const newX = x - directionX * step;
                const newY = y - directionY * step;

                const pointCur = params.points[newX] && params.points[newX][newY]
                if (pointCur && !pointCur.isClickable() && (isUsers ? pointCur.getId() === id : pointCur.getId() !== id)) {
                    lineWeight++;
                }
            }
            weights.push(lineWeight - lineUnreachablePoints);
        }

        return Math.max(...weights);
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
