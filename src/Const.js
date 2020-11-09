export const ITEM_HEIGHT = 48;

export const ITEM_PADDING_TOP = 8;

export const DEFAULT_MODE = 'multi';

export const DEFAULT_COMPLEXITY = 'low';

export const COMPLEXITY_LEVELS = [{
        name: 'low'
    }, {
        name: 'medium'
    }, {
        name: 'high'
    }
]

export const MIN_FEILD_SIZE = 3;
export const MAX_FIELD_SIZE = 15;

export const CROSS_PLAYER = 'cross';
export const CIRCLE_PLAYER = 'circle';
export const DEFAULT_START_TURN = CROSS_PLAYER;

export const MULTI_MODE = 'multi';

export const GAME_MODES = [{
    name: 'signle'
}, {
    name: MULTI_MODE
}]

export const FIELD_SIZE = [];
export const FIELD_ROW_SIZE = [];

for(let i = MIN_FEILD_SIZE; i < MAX_FIELD_SIZE; i++) {
    FIELD_SIZE.push({
        value: i,
        rowSize: MIN_FEILD_SIZE
    })
    FIELD_ROW_SIZE.push(i)
}