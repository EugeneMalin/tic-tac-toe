/**
 * Game state display
 */

import './State.css'
import { Icon } from '@material-ui/core';
import { Loop } from '@material-ui/icons';

export function State(props) {
    const status = [];
    
    if (!props.field.isActive()) {
        status.push('Game ends')
        status.push(props.field.winner ? `the ${props.field.winner.name} wins!` : 'there is dead heat')
    } else {
        if (props.field.isClear()) {
            status.push('Game starts');
        } else {
            status.push('Game is running');
        }
        status.push(`there is ${props.player.name} turn`)
    }

    return <div className='State'>
        <Icon onClick={props.onResetClicked} fontSize='large' color='action'><Loop fontSize='large'/></Icon>
        <div className="State-info">
        {status.join(', ')}
        </div>
    </div>
}
