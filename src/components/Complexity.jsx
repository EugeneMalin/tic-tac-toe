/**
 * Complexity setting component
 */

import { COMPLEXITY_LEVELS, ITEM_HEIGHT, ITEM_PADDING_TOP } from "../Const";
import { Input, InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";
import { Engine } from "../data/Engine";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        }
    }
};

export function Complexity(props) {
    return (
        <FormControl disabled={props.disabled} className={`Complexity ${props.className}`}>
            <InputLabel className="Complexity-label" id="complexity-label">Complexity</InputLabel>
            <Select
                labelId="complexity-label"
                id="complexity"
                className="Complexity-value"
                onChange={(e, item) => {
                    props.onComplexityChanged(e, item.props.value)
                }}
                MenuProps={MenuProps}
                input={<Input />}
                value={props.complexity}
            >
                {Engine.getComplexities().map(({id, name}) => (
                    <MenuItem key={id} value={name}>
                    {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}