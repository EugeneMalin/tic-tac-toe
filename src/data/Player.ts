import { SvgIcon } from "@material-ui/core";
import { PLAYER_TYPE } from "../Const";

/**
 * Contains data about game members
 */
export class Player {
    private _id: number;
    private _icon: typeof SvgIcon;
    private _type: PLAYER_TYPE;
    private _isWinner: boolean = false;

    name: string;

    constructor(id: number, name: string, icon: typeof SvgIcon, type: PLAYER_TYPE) {
        this._id = id;
        this.name = name;
        this._icon = icon;
        this._type = type;
    }

    /**
     * Sets the user type
     * @param type new user type
     */
    setType(type: PLAYER_TYPE): void {
        this._type = type;
    }

    /**
     * Sets the AI user type
     */
    onAI(): void {
        this.setType(PLAYER_TYPE.AI);
    }

    /**
     * Add marks for users
     */
    mark(marks: {[x: string]: boolean} = {winner: true}): void {
        this._isWinner = marks.winner;
    }


    /**
     * Remove marks from user
     */
    unmark(): void {
        this.mark({winner: false});
    }

    /**
     * Checks that user is winner
     */
    isWinner(): boolean {
        return this._isWinner;
    }

    /**
     * Gets icon component type
     */
    getIcon(): typeof SvgIcon {
        return this._icon;
    }

    /**
     * Gets user identifier
     */
    getId() {
        return this._id;
    }

    /**
     * Checks that user don't make physical turn
     */
    isAuto(): boolean {
        return this._type !== PLAYER_TYPE.PHYSICAL;
    }
}
