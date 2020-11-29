import { IFlags } from "./IFlags";

/**
 * Base state options interface
 */
export interface IState {
    /**
     * Gettings the next state using parametrs
     * @param flags number of signs, that provides state changing
     */
    getNext(flags?: IFlags): IState;

    /**
     * Creating state string variant
     */
    toString(): string;
}
