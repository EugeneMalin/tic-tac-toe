import { IState } from "../interface/IState";
import { BaseState } from "./Base";

/**
 * End of game state
 */
export class EndState extends BaseState implements IState {
    getNext(): IState {
        return this;
    }

    toString(): string {
        return 'Game ends, there is no free points'
    } 
}