import { Player } from "../../data/Player";

export interface IState {
    /**
     * Winner of game
     */
    winner: Player | null;
    /**
     * Current player
     */
    player: Player;
    /**
     * Sign of game state
     */
    active: boolean;
    /**
     * Sign of clear game field
     */
    clear: boolean;
}