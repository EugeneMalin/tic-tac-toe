/**
 * Класс для хранения и обработки состояния игрового поля
 */

import { Point } from "./Point"

const MIN_FEILD_SIZE = 3;

const DIRECTIONS_COUNT = 8;

export class Field {
    constructor(size = MIN_FEILD_SIZE) {
        this.points = [];
        this.freeCount = size * size
        this.winLine = null;

        for (let i = 0; i < size; i++) {
            const row = []
            for (let j = 0; j < size; j++) {
                row.push(new Point());
            }
            this.points.push(row)
        }
    }

    isActive() {
        return !this.winLine
    }

    isFull() {
        return !this.freeCount;
    }
    
    map(callback) {
        return this.points.map(callback);
    }

    update(x, y, type) {
        const point = this.points[x][y];

        if (!point.isClickable()) {
            throw new Error('Клетка уже использована');
        }

        point.state = 'default';
        point.type = type;

        this.freeCount--;

        const [hasWin, winLine] = this._checkState(x, y);

        if (hasWin) {
            this.winLine = winLine;
            winLine.forEach((pointer) => {
                this.points[pointer[0]][pointer[1]].state = 'active'
            })
        }
    }

    _checkState(x, y) {
        // пример обработки на минимальном размере
        //     N          +   +   +
        //   NW NE          + + +
        // W       E      * * 0 + +
        //   SW SE          * * *
        //     S          *   *   *
        // 0 - это точка соответствующая х и у

        let [hasWinLine, winLine] = [false, []];

        for (let dir = 0; dir < DIRECTIONS_COUNT; dir++) {
            if (hasWinLine) {
                continue
            }
            [hasWinLine, winLine] = this._checkLine(x, y, dir);
        }
        return [hasWinLine, winLine];
    }

    _checkLine(x, y, direction) {
        const point = this.points[x][y];
        const lineSize = Math.min(this.points.length, this.points[0].length);
        let pointsCount = 0;
        let winLine = [];
        for (let step = 0; step < lineSize; step++) {
            const directXStep = step * (direction === 0 || direction === 6 || direction === 7 ?
                1 : (direction === 1 || direction === 5 ? 0 : -1));
            const directYStep = step * (direction === 0 || direction === 1 || direction === 2 ? 
                1 : (direction === 3 || direction === 7 ? 0 : -1));

            const newX = x - directXStep;
            const newY = y - directYStep;

            if (pointsCount > lineSize - 1) {
                continue;
            }

            const pointCur = this.points[newX] && this.points[newX][newY]
            if (pointCur && pointCur.type === point.type) {
                pointsCount++;
                winLine.push([newX, newY])
            } else {
                pointsCount = 0;
                winLine = []
            }
        }
        return [pointsCount > lineSize - 1, winLine];
    }
}
