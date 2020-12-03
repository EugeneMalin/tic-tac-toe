import { DEFAULT_MODE, DEFAULT_PLAYERS, MULTI_MODE, PLAYER_TYPE } from "../Const";
import { Engine } from "./Engine";
import { Field } from "./Field";
import { IState } from "./interface/IState";
import { Player } from "./Player";
import { PlayersQueue } from "./PlayersQueue";
import { EndState } from "./states/End";
import { StartState } from "./states/Start";
import { WinState } from "./states/Win";

/**
 * Game facade class
 */
export class Game {
    private _field: Field;
    private _engine: Engine;
    private _players: PlayersQueue;
    private _state: IState;
    private _mode: string;

    constructor(field: Field = new Field(), engine: Engine = new Engine()) {
        this._field = field;
        this._engine = engine;
        this._players = DEFAULT_PLAYERS;
        this._state = new StartState();
        this._mode = DEFAULT_MODE;
    }

    updatePlayers(players: Player[]): Game {
        this._players = new PlayersQueue(players);
        return this;
    }

    getPlayers(): Player[] {
        return this._players.getItems();
    }

    isStarts(): boolean {
        return this._state instanceof StartState;
    }

    isEnds(): boolean {
        return this._state instanceof EndState || this._state instanceof WinState;
    }

    isActive(): boolean {
        return !this.isStarts() && !this.isEnds();
    }

    selfTurn(): Game {
        this.turn(...this._engine.getPoint(this._players.getCurrent(), this._field));
        return this;
    }

    turn(x: number, y: number): Game {
        const {hasWin} = this._field.update(x, y, this._players.getCurrent());
        this._state = this._state.getNext({
            win: hasWin,
            fullField: this._field.isFull()
        });
        if (!this.isEnds()) {
            this._players.next();
        }
        return this;
    }

    start(): Game {
        this._state = this._state.getNext({start: this.isStarts()})
        return this;
    }

    refresh(): Game {
        this._field = new Field(this._field.size, this._field.rowSize);
        this._state = new StartState()
        this._players.refresh();
        return this;
    }

    updateField(params: {size?: number, rowSize?: number}): Game {
        this._field = new Field(params.size || this._field.size, params.rowSize || this._field.rowSize);
        return this;
    }

    updateComplexity(complexity: number): Game {
        this._engine.updateComplexity(complexity);
        return this;
    }

    updateMode(mode: string): Game {
        if (mode === MULTI_MODE) {
            this._players.getItems().forEach(item => item.setType(PLAYER_TYPE.PHYSICAL));
        } else {
            this._players.onAI();
        }
        
        this._mode = mode;
        return this;
    }

    getComplexity(): number {
        return this._engine.getComplexityId();
    }

    getFieldSize(): number {
        return this._field.size;
    }

    getFieldRowSize(): number {
        return this._field.rowSize;
    }

    getMode(): string {
        return this._mode;
    }

    getCurrentPlayer(): Player {
        return this._players.getCurrent();
    }

    getWinnerPlayer(): Player | null {
        return this._state instanceof WinState ? this._players.getCurrent() : null;
    }

    getField(): Field {
        return this._field;
    }

    isSelfTurn(): boolean {
        return this._players.getCurrent().isAuto();
    }
}
