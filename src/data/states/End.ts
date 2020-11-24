import { IState } from "../interface/IState";
import { BaseState } from "./Base";

/**
 * Конечное состояние
 */
export class EndState extends BaseState implements IState {
    getNext(): IState {
        return this;
    }

    toString(): string {
        return 'Game ends, there is no free points'
    } 
}