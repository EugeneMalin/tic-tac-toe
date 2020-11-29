import { FIELD_ROW_SIZE, ITEM_HEIGHT, ITEM_PADDING_TOP, MIN_FEILD_SIZE } from "../Const";
import { Input, InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";
import { IRowSize } from "./interface/IRowSize"

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 80,
        }
    }
};

/**
 * Win line count setting for field
 * @param {IRowSize} props component options
 */
export function RowSize(props) {
    return (
        <FormControl disabled={props.disabled || (!(props.size - MIN_FEILD_SIZE))} className={`RowSize ${props.className}`}>
            <InputLabel className="RowSize-label" id="rowSize-label">Row size</InputLabel>
            <Select
                labelId="rowSize-label"
                id="rowSize"
                className="RowSize-value"
                onChange={(e, item) => {
                    props.onRowSizeChanged(e, item.props.value)
                }}
                MenuProps={MenuProps}
                input={<Input />}
                value={props.rowsize || MIN_FEILD_SIZE}
            >
                {FIELD_ROW_SIZE.slice(0, props.size - MIN_FEILD_SIZE + 1).map((value) => (
                    <MenuItem key={value} value={value}>
                    {`${value} units`}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
