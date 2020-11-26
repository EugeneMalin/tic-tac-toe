import { ICheckedPoint } from "./ICheckedPoint";

/**
 * Интерфейс базового сотояния получаемого о поле
 * Позволяет получить данные об оптимальном нападении
 */
export interface IAttackStatus {
    hasAttack: boolean;
    attackPoints?: ICheckedPoint[];
}
