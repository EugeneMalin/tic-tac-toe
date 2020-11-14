/**
 * Класс для хранения состояния текущей точки
 */

import { Clear, CropFree, RadioButtonUnchecked } from "@material-ui/icons";
import { CIRCLE_PLAYER_ID, CROSS_PLAYER_ID } from "../Const";

/**
 * Иконки для отображения игроков
 */
const ICONS = {
    empty: <CropFree/>,
    [CROSS_PLAYER_ID]: <Clear/>,
    [CIRCLE_PLAYER_ID]: <RadioButtonUnchecked/>
}

/**
 * Перечень цветов для отображения состояний
 */
const COLORS = {
    empty: 'disabled',
    active: 'secondary',
    default: 'primary'
}

export class Point {
    constructor(x, y, type = 'empty', state = 'empty') {
        this.x = x;
        this.y = y;
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
