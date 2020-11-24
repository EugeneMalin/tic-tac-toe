import { IFlags } from "./IFlags";

/**
 * Интерфейс для обработки состояний игры
 */
export interface IState {
    getNext(flags?: IFlags): IState;
    toString(): string;
}
