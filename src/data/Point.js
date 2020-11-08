/**
 * Класс для хранения состояния текущей точки
 */

import { Clear, CropFree, RadioButtonUnchecked } from "@material-ui/icons";

const ICONS = {
    empty: <CropFree/>,
    cross: <Clear/>,
    circle: <RadioButtonUnchecked/>
}

const COLORS = {
    empty: 'disabled',
    active: 'secondary',
    default: 'primary'
}

export class Point {
    constructor(type = 'empty', state = 'empty') {
        this.type = type;
        this.state = state;
    }

    isClickable() {
        return this.state === 'empty'
    }

    getIcon() {
        return ICONS[this.type];
    }

    getColor() {
        return COLORS[this.state]
    }
}
