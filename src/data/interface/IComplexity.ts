import { IStrategy } from "./IStratery";

/**
 * Интерфейс элемента настроек сложности
 */
export interface IComplexity {
    id: number;
    name: string;
    strategy?: IStrategy;
}
