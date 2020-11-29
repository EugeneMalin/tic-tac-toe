import { COMPLEXITY_LEVELS, DEFAULT_COMPLEXITY } from "../Const";
import { Field } from "./Field";
import { IComplexity } from "./interface/IComplexity";
import { IStrategy, PointVector } from "./interface/IStratery";
import { Player } from "./Player";

/**
 * Wrapper of AI strategies
 */
export class Engine implements IStrategy {
    private _complexity: IComplexity;

    constructor(key: number = 0) {
        this._complexity = COMPLEXITY_LEVELS.find(item => item.id === key) || DEFAULT_COMPLEXITY;
    }

    /**
     * Getting current complexity level
     */
    getComplexityId(): number {
        return this._complexity.id;
    }

    /**
     * Updating the current complexity
     * @param key complexity level
     */
    updateComplexity(key: number): Engine {
        const newComplexity = COMPLEXITY_LEVELS.find(item => item.id === key);
        if (newComplexity) {
            this._complexity = newComplexity;
        }
        return this;
    }

    /**
     * Getting the turn from player
     * @param player current player
     * @param field field
     */
    getPoint(player: Player, field: Field): PointVector {
        if (!this._complexity.strategy) {
            throw(new Error('Стратегия поведения не установлена!'));
        }

        return this._complexity.strategy?.getPoint(player, field);
    }
    
    /**
     * Getting avaliable complexity levels
     */
    static getComplexities(): IComplexity[] {
        return COMPLEXITY_LEVELS.filter(item => !!item.strategy);
    }
}
