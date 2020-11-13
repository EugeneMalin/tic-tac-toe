import { COMPLEXITY_LEVELS, DEFAULT_COMPLEXITY } from "../Const";
import { Field } from "./Field";
import { IComplexity } from "./interface/IComplexity";
import { IStrategy, PointVector } from "./interface/IStratery";

/**
 * Класс обертка над AI, AI представляют собой стратегии работающие на основе игрового поля
 */
export class Engine implements IStrategy {
    private _strategy: IComplexity;

    constructor(key: number) {
        this._strategy = COMPLEXITY_LEVELS.find(item => item.id === key) || DEFAULT_COMPLEXITY;
    }

    getPoint(field: Field): PointVector {
        if (!this._strategy.strategy) {
            throw(new Error('Стратегия не установлена!'))
        }

        return this._strategy.strategy?.getPoint(field);
    }
    
    static getComplexities(): IComplexity[] {
        return COMPLEXITY_LEVELS.filter(item => !!item.strategy);
    }
}
