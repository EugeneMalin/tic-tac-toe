import { IComplexity } from "./data/interface/IComplexity";
import { IFieldSize } from "./data/interface/IFieldSize";
import { Player } from "./data/Player";
import { Weak } from "./data/strategy/Weak";
import { CropFree, Clear, RadioButtonUnchecked } from "@material-ui/icons";
import { PlayersQueue } from "./data/PlayersQueue";
import { Medium } from "./data/strategy/Medium";
import { Strong } from "./data/strategy/Strong";

export const ITEM_HEIGHT = 48;

export const ITEM_PADDING_TOP = 8;

export const DEFAULT_MODE = 'multi';

export const DEFAULT_COMPLEXITY = {
    name: 'low',
    id: 0,
    strategy: new Weak()
};

export const COMPLEXITY_LEVELS: IComplexity[] = [
    DEFAULT_COMPLEXITY, {
        name: 'medium',
        id: 1,
        strategy: new Medium()
    }, {
        name: 'high',
        id: 2,
        strategy: new Strong()
    }
]

export const MIN_FEILD_SIZE = 3;
export const MAX_FIELD_SIZE = 15;
export const EMPTY_POINT_ICON = CropFree;
export const MULTI_MODE = 'multi';
export const SINGLE_MODE = 'single';

export enum PLAYER_TYPE {
    PHYSICAL,
    AI,
    REMOTE
}

export const DEFAULT_PLAYERS = new PlayersQueue([
    new Player(0, 'cross', Clear, PLAYER_TYPE.PHYSICAL),
    new Player(1, 'circle', RadioButtonUnchecked, PLAYER_TYPE.PHYSICAL)
])

export const DEFAULT_PLAYERS_WITH_AI = new PlayersQueue([
    new Player(0, 'cross', Clear, PLAYER_TYPE.PHYSICAL),
    new Player(1, 'circle', RadioButtonUnchecked, PLAYER_TYPE.AI)
])

export const GAME_MODES = [{
    name: SINGLE_MODE,
}, {
    name: MULTI_MODE,
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
