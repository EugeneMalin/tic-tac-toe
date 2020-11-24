import { Engine } from "./Engine";
import { Field } from "./Field";
import { IState } from "./interface/IState";
import { PlayersQueue } from "./PlayersQueue";
import { StartState } from "./states/Start";

/**
 * Класс игры, является фасадом для работы с интерфейсом
 */
export class Game {
    private _field: Field;
    private _engine: Engine;
    private _users: PlayersQueue;
    private _state: IState;

    constructor(field: Field, engine: Engine, users: PlayersQueue) {
        this._field = field;
        this._engine = engine;
        this._users = users;
        this._state = new StartState();
    }
}