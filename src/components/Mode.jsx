import { DEFAULT_MODE, GAME_MODES, ITEM_HEIGHT, ITEM_PADDING_TOP } from "../Const";
import { Input, InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 80,
        }
    }
};

/**
 * Mode settings component
 */
export function Mode(props) {
    return (
        <FormControl disabled={props.disabled} className={`Mode ${props.className}`}>
            <InputLabel className="Mode-label" id="mode-label">Mode</InputLabel>
            <Select
                labelId="mode-label"
                id="mode"
                className="Mode-value"
                onChange={(e, item) => {
                    props.onModeChanged(e, item.props.value)
                }}
                MenuProps={MenuProps}
                input={<Input />}
                value={props.mode || DEFAULT_MODE}
            >
                {GAME_MODES.map(({name}) => (
                    <MenuItem key={name} value={name}>
                    {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}