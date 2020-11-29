import { IFlags } from "../interface/IFlags";
import { IState } from "../interface/IState";
import { BaseState } from "./Base";

/**
 * Win of game State
 */
export class WinState extends BaseState implements IState {
    getNext(flags: IFlags): IState {
        super.getNext(flags);
        return this;
    }

    toString(): string {
        return 'Game ends'
    }
}