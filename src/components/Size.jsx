import { FIELD_SIZE, ITEM_HEIGHT, ITEM_PADDING_TOP, MIN_FEILD_SIZE } from "../Const";
import { Input, InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";
import {ISize} from './interface/ISize';

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 100,
        }
    }
};

/**
 * Game field size setting component
 * @param {ISize} props component options
 */
export function Size(props) {
    return (
        <FormControl disabled={props.disabled} className={`Size ${props.className}`}>
            <InputLabel className="Size-label" id="size-label">Size</InputLabel>
            <Select
                labelId="size-label"
                id="size"
                className="Size-value"
                onChange={(e, item) => {
                    props.onSizeChanged(e, item.props.value, item.props.rowSize)
                }}
                MenuProps={MenuProps}
                input={<Input />}
                value={props.size || MIN_FEILD_SIZE}
            >
                {FIELD_SIZE.map(({value, rowSize}) => (
                    <MenuItem key={value} value={value} rowSize={rowSize}>
                    {`${value} x ${value}`}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
