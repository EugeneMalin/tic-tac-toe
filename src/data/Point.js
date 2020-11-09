/**
 * Класс для хранения состояния текущей точки
 */

import { Clear, CropFree, RadioButtonUnchecked } from "@material-ui/icons";
import { CIRCLE_PLAYER, CROSS_PLAYER } from "../Const";

/**
 * Иконки для отображения игроков
 */
const ICONS = {
    empty: <CropFree/>,
    [CROSS_PLAYER]: <Clear/>,
    [CIRCLE_PLAYER]: <RadioButtonUnchecked/>
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
