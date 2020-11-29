import { Button, Radio } from '@material-ui/core';
import { PLAYER_TYPE } from '../Const';
import './PlayerSelect.css';
import {IPlayerSelect} from './interface/IPlayerSelect';

/**
 * Player chooser and config master
 * @param {IPlayerSelect} props 
 */
export function PlayerSelect(props) {
    const players = props.players.map((player) => {
        const Icon = player.getIcon();
        return (<div className='PlayerSelect-item' key={player.getId()}>
                    <Button variant="outlined" color={`${player.isWinner() ? 'secondary' : 'primary'}`}>
                        <Icon color=""/>
                        <div className="PlayerSelect-name">{player.name}</div>
                    </Button>
                    <div className="PlayerSelect-setting"><Radio onClick={() => {
                        player.setType(player.isAuto() ? PLAYER_TYPE.PHYSICAL : PLAYER_TYPE.AI);
                        props.onPlayersUpdated(props.players);
                    }} checked={player.isAuto()}/><span>AI</span></div>
                </div>);
    });
    return <div className={`PlayerSelect ${props.className}`}>
        {players}
    </div>
}