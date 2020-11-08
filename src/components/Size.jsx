import { FIELD_SIZE, ITEM_HEIGHT, ITEM_PADDING_TOP, MIN_FEILD_SIZE } from "../Const";
import { Input, InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      }
    }
  };

export function Size(props) {
    return (
        <FormControl disabled={props.disabled} className={`Size ${props.className}`}>
            <InputLabel className="Size-label" id="size-label">Size{props.additionalLabel ? ' ' + props.additionalLabel : ''}</InputLabel>
            <Select
                labelId="size-label"
                id="size"
                className="Size-value"
                onChange={(e, item) => {
                    props.onSizeChanged(e, item.props.value)
                }}
                MenuProps={MenuProps}
                input={<Input />}
                value={props.size || MIN_FEILD_SIZE}
            >
                {FIELD_SIZE.map(({value}) => (
                    <MenuItem key={value} value={value}>
                    {`${value} x ${value}`}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}