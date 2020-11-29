import { Player } from "../../data/Player";
import { IBase } from "./IBase";

/**
 * Player select component options interface
 */
export interface IPlayerSelect extends IBase {
    /**
     * Players array
     */
    players: Player[];
}
