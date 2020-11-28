import { Player } from "./Player";

/**
 * Класс для управления игроками
 */
export class PlayersQueue {
    private _players: Player[];

    constructor(players: Player[]) {
        if (players.length < 2) {
            throw(new Error('Набор игроков должен содержать минимум 2-х!'))
        }
        this._players = [...players];
    }

    onAI(): void {
        this._players.forEach((player, index) => {
            if (index) {
                player.onAI();
            }
        })
    }

    refresh(): void {
        this._players.forEach(player => player.unmark());
    }

    /**
     * Получение списка игроков
     */
    getItems(): Player[] {
        return this._players.slice();
    }

    /**
     * Получение победителя, если он есть
     */
    getWinner(): Player | undefined {
        return this._players.find(player => player.isWinner()); 
    }

    /**
     * Получение нового пользователя, омещает выданного участника в конец списка
     */
    next(): Player {
        const pl = this._players.shift();
        if (!pl) {
            throw(new Error('Не удалось получить пользователя из списка!'))
        }
        this._players.push(pl);
        return pl;
    }

    /**
     * Получение текущего пользователя, не изменяет очередь участников
     */
    getCurrent(): Player {
        const pl = this._players[0];
        if (!pl) {
            throw(new Error('Не удалось получить текущего пользователя!'))
        }
        return pl;
    }
}
