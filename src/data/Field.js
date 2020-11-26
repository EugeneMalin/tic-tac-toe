import { MIN_FEILD_SIZE } from "../Const";
import { Analyzer } from "./Analyzer";
import { Point } from "./Point"

/**
 * Класс для хранения и обработки состояния игрового поля
 */
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
     * @returns {{hasWin: boolean, winLine: number[]}}
     */
    update(x, y, player) {
        const point = this.points[x][y];

        if (!point.isClickable()) {
            throw new Error('Клетка уже использована');
        }

        point.putPlayer(player)

        this.freeCount--;

        const {hasWin, winLine} = this._extractWin(x, y);

        if (hasWin) {
            point.player.mark();
            winLine.forEach((pointer) => {
                this.points[pointer[0]][pointer[1]].state = 'active'
            })
        }
        return {hasWin, winLine};
    }

    /**
     * Counting nearest win line
     * @param {Number} x horizontal position
     * @param {Number} y vertical position
     */
    _extractWin(x, y) {
        return Analyzer.getWinStatus(x, y, {
            size: this.size,
            rowSize: this.rowSize,
            points: this.points
        });
    }
}
