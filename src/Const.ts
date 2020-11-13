import { IComplexity } from "./data/interface/IComplexity";
import { IFieldSize } from "./data/interface/IFieldSize";
import { Weak } from "./data/strategy/Weak";

export const ITEM_HEIGHT = 48;

export const ITEM_PADDING_TOP = 8;

export const DEFAULT_MODE = 'multi';

export const DEFAULT_COMPLEXITY ={
    name: 'low',
    id: 0,
    strategy: new Weak()
};

export const COMPLEXITY_LEVELS: IComplexity[] = [
    DEFAULT_COMPLEXITY, {
        name: 'medium',
        id: 1,
        strategy: undefined
    }, {
        name: 'high',
        id: 2,
        strategy: undefined
    }, {
        name: 'high',
        id: 3,
        strategy: undefined
    }
]

export const MIN_FEILD_SIZE = 3;
export const MAX_FIELD_SIZE = 15;

export const CROSS_PLAYER = 'cross';
export const CIRCLE_PLAYER = 'circle';
export const DEFAULT_START_TURN = CROSS_PLAYER;

export const MULTI_MODE = 'multi';
export const SINGLE_MODE = 'single';

export const GAME_MODES = [{
    name: SINGLE_MODE
}, {
    name: MULTI_MODE
}]

export const FIELD_SIZE: IFieldSize[] = [];
export const FIELD_ROW_SIZE: number[] = [];

for(let i = MIN_FEILD_SIZE; i < MAX_FIELD_SIZE; i++) {
    FIELD_SIZE.push({
        value: i,
        rowSize: MIN_FEILD_SIZE
    })
    FIELD_ROW_SIZE.push(i)
}