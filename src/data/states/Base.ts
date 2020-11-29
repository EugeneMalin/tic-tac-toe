import { IFlags } from "../interface/IFlags";
import { IState } from "../interface/IState";

/**
 * Base game state
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