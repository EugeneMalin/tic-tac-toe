import { SvgIcon } from "@material-ui/core";
import { PLAYER_TYPE } from "../Const";

/**
 * Класс игрока
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

    setType(type: PLAYER_TYPE): void {
        this._type = type;
    }

    onAI(): void {
        this.setType(PLAYER_TYPE.AI);
    }

    mark(): void {
        this._isWinner = true;
    }

    unmark(): void {
        this._isWinner = false;
    }

    isWinner(): boolean {
        return this._isWinner;
    }

    getIcon(): typeof SvgIcon {
        return this._icon;
    }

    getId() {
        return this._id;
    }

    isAuto(): boolean {
        return this._type !== PLAYER_TYPE.PHYSICAL;
    }
}
