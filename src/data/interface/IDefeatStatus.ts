import { ICheckedPoint } from "./ICheckedPoint";

/**
 * Интерфейс с сотоянием по обороне
 */
export interface IDefeatStatus {
    hasDefeat: boolean;
    defeatPoints: ICheckedPoint[];
}