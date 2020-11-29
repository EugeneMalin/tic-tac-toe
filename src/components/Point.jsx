import { Icon, IconButton } from "@material-ui/core";

/**
 * Unit display component
 */
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
