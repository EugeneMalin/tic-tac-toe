/**
 * Game state display
 */

import './State.css'
import { Icon } from '@material-ui/core';
import { Loop } from '@material-ui/icons';

export function State(props) {
    return <div className='State'>
        <Icon onClick={props.onResetClicked} fontSize='large' color='action'><Loop fontSize='large'/></Icon>
        <div className="State-info">
        {(props.field.isActive() ? `Game is running, there is ${props.turn} turn` : `Game is finished! The ${props.field.winType} wins!`)}
        </div>
    </div>
}
