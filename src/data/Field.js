import { MIN_FEILD_SIZE } from "../Const";
import { Analyzer } from "./Analyzer";
import { Point } from "./Point"

/**
 * Game board class
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
     * Check that all points used
     */
    isFull() {
        return !this.freeCount;
    }
    
    /**
     * Checks that field is emplty
     */
    isClear() {
        return this.freeCount === this.points.length * this.points[0].length;
    }

    /**
     * Run map of each row
     * @see Array.prototype:map
     * @param {Function} callback 
     */
    map(callback) {
        return this.points.map(callback);
    }

    /**
     * Run over all points
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
