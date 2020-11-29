import { IBasePoint } from "./IBasePoint";

/**
 * Interface of analyzed unit of field
 */
export interface ICheckedPoint extends IBasePoint {
    /**
     * Some parametr of point, for example weight of point for attack
     */
    level: number;
}