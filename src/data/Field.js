import { Point } from "./Point"

export class Field {
    constructor(size = 3) {
        this.points = []
        for (let i = 0; i < size; i++) {
            const row = []
            for (let j = 0; j < size; j++) {
                row.push(new Point());
            }
            this.points.push(row)
        }
    }
    
    map(callback) {
        return this.points.map(callback);
    }

    update(x, y, type) {
        const point = this.points[x][y];

        if (!point.isClickable()) {
            throw new Error('Клетка уже использована');
        }

        this.points[x][y].state = 'default';
        this.points[x][y].type = type;
    }
}
