import { Player } from "../Player";
import { IBasePoint } from "./IBasePoint";

/**
 * Интерфейс характеристик точки на игровом поле
 */
export interface IPoint extends IBasePoint {
    player: Player;
    state: string;
}