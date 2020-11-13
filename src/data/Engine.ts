import { COMPLEXITY_LEVELS, DEFAULT_COMPLEXITY } from "../Const";
import { Field } from "./Field";
import { IComplexity } from "./interface/IComplexity";
import { IStrategy, PointVector } from "./interface/IStratery";

/**
 * Класс обертка над AI, AI представляют собой стратегии работающие на основе игрового поля
 */
export class Engine implements IStrategy {
    private _complexity: IComplexity;

    constructor(key: number = 0) {
        this._complexity = COMPLEXITY_LEVELS.find(item => item.id === key) || DEFAULT_COMPLEXITY;
    }

    getComplexityId(): number {
        return this._complexity.id;
    }

    updateComplexity(key: number): Engine {
        const newComplexity = COMPLEXITY_LEVELS.find(item => item.id === key);
        if (newComplexity) {
            this._complexity = newComplexity;
        }
        return this;
    }

    getPoint(field: Field): PointVector {
        if (!this._complexity.strategy) {
            throw(new Error('Стратегия поведения не установлена!'));
        }

        return this._complexity.strategy?.getPoint(field);
    }
    
    static getComplexities(): IComplexity[] {
        return COMPLEXITY_LEVELS.filter(item => !!item.strategy);
    }
}
