/**
 * Unit display component
 */

import { Button, Icon, IconButton } from "@material-ui/core";

export function Point(props) {
    return (
        <IconButton
            onClick={(e) => props.onClick(e)}
            fontSize='large'
        >
            <Icon
                className={props.className}
                fontSize='large'
                color={props.color}
            >{props.icon}</Icon>
        </IconButton>
    )
}
