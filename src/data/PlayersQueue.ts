import { Player } from "./Player";

/**
 * Gamers queue class
 */
export class PlayersQueue {
    private _players: Player[];

    constructor(players: Player[]) {
        if (players.length < 2) {
            throw(new Error('Набор игроков должен содержать минимум 2-х!'))
        }
        this._players = [...players];
    }

    /**
     * Switchs on AI mode for players, but excludes first user of list
     */
    onAI(): void {
        this._players.forEach((player, index) => {
            if (index) {
                player.onAI();
            }
        })
    }

    /**
     * Remove marks from users
     */
    refresh(): void {
        this._players.forEach(player => player.unmark());
    }

    /**
     * Gets the list of players
     */
    getItems(): Player[] {
        return this._players.slice();
    }

    /**
     * Gets winner
     */
    getWinner(): Player | undefined {
        return this._players.find(player => player.isWinner()); 
    }

    /**
     * Gets next user, the current user adds to the end of list
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
