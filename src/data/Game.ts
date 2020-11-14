import { Engine } from "./Engine";
import { Field } from "./Field";
import { PlayersQueue } from "./PlayersQueue";

/**
 * Класс игры, является фасадом для работы с интерфейсом
 */
export class Game {
    private _field: Field;
    private _engine: Engine;
    private _users: PlayersQueue;

    constructor(field: Field, engine: Engine, users: PlayersQueue) {
        this._field = field;
        this._engine = engine;
        this._users = users;
    }
}