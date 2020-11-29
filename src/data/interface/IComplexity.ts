import { IStrategy } from "./IStratery";

/**
 * Complexity change options
 */
export interface IComplexity {
    id: number;
    name: string;
    strategy?: IStrategy;
}
