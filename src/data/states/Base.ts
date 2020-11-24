import { IFlags } from "../interface/IFlags";
import { IState } from "../interface/IState";
import { Player } from "../Player";

/**
 * Базовое сотояние
 */
export class BaseState implements IState {
    protected _flags: IFlags | null = null;

    getNext(flags: IFlags): IState {
        this._flags = flags;
        return new BaseState();
    }

    toString(): string {
        return '';
    }
}