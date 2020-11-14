/**
 * Класс для хранения и обработки состояния игрового поля
 */

import { MIN_FEILD_SIZE } from "../Const";
import { Point } from "./Point"

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

export class Field {
    constructor(size = MIN_FEILD_SIZE, rowSize = MIN_FEILD_SIZE) {
        this.points = [];
        this.freeCount = size * size
        this.size = size;
        this.rowSize = rowSize;

        for (let i = 0; i < size; i++) {
            const row = []
            for (let j = 0; j < size; j++) {
                row.push(new Point(i, j));
            }
            this.points.push(row)
        }
    }

    /**
     * Проверка что игровое поле активно: нет победителя и есть свободные ходы
     */
    isActive() {
        return !this.isFull() && !this.hasWinner()
    }

    /**
     * Проверка что есть победитель
     */
    hasWinner() {
        return !!this.winner
    }

    /**
     * Проверка что на поле еще есть место для хода
     */
    isFull() {
        return !this.freeCount;
    }
    
    /**
     * Проверка что поле полностью свободно (игра не началась)
     */
    isClear() {
        return this.freeCount === this.points.length * this.points[0].length;
    }

    /**
     * Выполняет функцию map над каждым элементом списка точек
     * @see Array.prototype:map
     * @param {Function} callback 
     */
    map(callback) {
        return this.points.map(callback);
    }

    /**
     * Выполняет обход всех точек не позволяет менять исходный набор
     */
    each(callback) {
        return [...this.points].forEach((row) => {
            row.forEach(callback);
        });
    }

    /**
     * Game field changing
     * @param {Number} x horizontal position
     * @param {Number} y vertical position
     * @param {String} type active player
     * @returns {Field}
     */
    update(x, y, player) {
        const point = this.points[x][y];

        if (!point.isClickable()) {
            throw new Error('Клетка уже использована');
        }

        point.putPlayer(player)

        this.freeCount--;

        const [hasWin, winLine] = this._extractWin(x, y);

        if (hasWin) {
            this.winner = point.player;
            winLine.forEach((pointer) => {
                this.points[pointer[0]][pointer[1]].state = 'active'
            })
        }
        return this;
    }

    /**
     * Counting nearest win line
     * @param {Number} x horizontal position
     * @param {Number} y vertical position
     */
    _extractWin(x, y) {
        let [hasWinLine, winLine] = [false, []];

        for (let dir = 0; dir < DIRECTIONS_COUNT; dir++) {
            if (hasWinLine) {
                continue
            }
            [hasWinLine, winLine] = this._extractWinFromLine(x, y, dir);
        }
        return [hasWinLine, winLine];
    }

    /**
     * Extracting win from directed line
     * @param {Number} x horizontal position
     * @param {Number} y vertical position
     * @param {Number} direction direction identifier
     */
    _extractWinFromLine(x, y, direction) {
        const point = this.points[x][y];
        
        let pointsCount = 0;
        let winLine = [];
        for (let step = - this.rowSize + 1; step < this.rowSize; step++) {
            const [directionX, directionY] = this._extractdirectionVector(direction)
            const newX = x - directionX * step;
            const newY = y - directionY * step;

            if (pointsCount > this.rowSize - 1) {
                continue;
            }

            const pointCur = this.points[newX] && this.points[newX][newY]
            if (pointCur && !pointCur.isClickable() && pointCur.getId() === point.getId()) {
                pointsCount++;
                winLine.push([newX, newY])
            } else {
                pointsCount = 0;
                winLine = []
            }
        }
        return [pointsCount > this.rowSize - 1, winLine];
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
    _extractdirectionVector(direction) {
        return [
            (direction === 0 || direction === 6 || direction === 7 ?
                1 : (direction === 1 || direction === 5 ? 0 : -1)),
            (direction === 0 || direction === 1 || direction === 2 ? 
                1 : (direction === 3 || direction === 7 ? 0 : -1))
        ]
    }
}
