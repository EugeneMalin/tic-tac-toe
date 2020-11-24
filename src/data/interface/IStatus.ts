import { IBaseStatus } from "./IBaseStatus";

/**
 * Интерфейс раширенного состояния поля, позволяет подобрать наиболее успешные точки
 * Определяет линии атаки и обороны
 */

export interface IStatus extends IBaseStatus {
    hasAttack: boolean;
    atackLines?: number[][][];
    hasDefeat: boolean;
    defeatLines?: number[][][];
}
