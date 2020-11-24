import { IFlags } from "../interface/IFlags";
import { IState } from "../interface/IState";
import { BaseState } from "./Base";
import { PlayerTurn } from "./PlayerTurn";

/**
 * Начальное сотояние
 */
export class StartState extends BaseState implements IState {

    getNext(flags: IFlags): IState {
        super.getNext(flags);
        if (!flags.start) {
            return this;
        }
        return new PlayerTurn();
    }
    toString(): string {
        return 'Game starts';
    }
}