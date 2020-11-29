import { IFlags } from "../interface/IFlags";
import { IState } from "../interface/IState";
import { BaseState } from "./Base";
import { EndState } from "./End";
import { WinState } from "./Win";

/**
 * Temporary state of player turn
 */
export class PlayerTurn extends BaseState implements IState {

    getNext(flags: IFlags): IState {
        super.getNext(flags);
        if (flags.win) {
            return new WinState();
        } 
        if (flags.fullField) {
            return new EndState();
        }
        

        return this; 
    }

    toString(): string {
        return 'Game is running'
    }
}
