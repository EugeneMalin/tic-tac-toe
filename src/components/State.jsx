import './State.css'

/**
 * Game state display
 */
export function State(props) {
    const status = [];
    
    if (!props.active) {
        status.push('Game ends')
        status.push(props.winner ? `the ${props.winner.name} wins!` : 'there is dead heat')
    } else {
        if (props.clear) {
            status.push('Game starts');
        } else {
            status.push('Game is running');
        }
        status.push(`there is ${props.player.name} turn`)
    }

    return <div className='State'>
        <div className="State-info">
            {status.join(', ')}
        </div>
    </div>
}
