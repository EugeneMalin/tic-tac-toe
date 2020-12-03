import { EMPTY_POINT_ICON } from "../Const";

/**
 * Hash map of colors for state
 */
const COLORS = {
    empty: 'disabled',
    active: 'secondary',
    default: 'primary'
}

/**
 * Game field unit class
 */
export class Point {
    constructor(x, y, player = null, state = 'empty') {
        this.x = x;
        this.y = y;
        this.player = player;
        this.state = player ? 'default' : state;
    }

    /**
     * Setting the player for point
     * @param {Player} player player that mark point at turn
     */
    putPlayer(player) {
        this.player = player;
        this.state = 'default';
    }

    /**
     * Gets the identifier of user
     */
    getId() {
        if (!this.player) {
            return null;
        }
        return this.player.getId();
    }

    /**
     * Checks that point is free
     */
    isClickable() {
        return !this.player;
    }

    /**
     * Gets the icon for point using state or player
     */
    getIcon() {
        if (!this.player) {
            return <EMPTY_POINT_ICON/>;
        }
        const Icon = this.player.getIcon()
        return <Icon/>;
    }

    /**
     * Gets the color of point using state
     */
    getColor() {
        return COLORS[this.state]
    }
}
