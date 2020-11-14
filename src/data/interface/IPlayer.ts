import {SvgIcon} from '@material-ui/core';

/**
 * Интерфейс игрока
 */
export interface IPlayer {
    id: number;
    name: string;
    icon: typeof SvgIcon;
}
