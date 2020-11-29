import { Player } from "../Player";
import { IBasePoint } from "./IBasePoint";

/**
 * Point options interface
 */
export interface IPoint extends IBasePoint {
    player: Player;
    state: string;
}