import { Icon } from "@material-ui/core";

export function Point(props) {
    return (
        <Icon
            className={props.className}
            fontSize='large'
            onClick={(e) => props.onClick(e)}
            color={props.color}
        >{props.icon}</Icon>
    )
}