/**
 * Класс для хранения состояния текущей точки
 */

import { EMPTY_POINT_ICON } from "../Const";

/**
 * Перечень цветов для отображения состояний
 */
const COLORS = {
    empty: 'disabled',
    active: 'secondary',
    default: 'primary'
}

export class Point {
    constructor(x, y, player = null, state = 'empty') {
        this.x = x;
        this.y = y;
        this.player = player;
        this.state = player ? 'default' : state;
    }

    putPlayer(player) {
        this.player = player;
        this.state = 'default';
    }

    getId() {
        if (!this.player) {
            return null;
        }
        return this.player.getId();
    }

    isClickable() {
        return !this.player;
    }

    getIcon() {
        if (!this.player) {
            return <EMPTY_POINT_ICON/>;
        }
        const Icon = this.player.getIcon()
        return <Icon/>;
    }

    getColor() {
        return COLORS[this.state]
    }
}
