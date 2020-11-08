
import { COMPLEXITY_LEVELS, DEFAULT_COMPLEXITY, ITEM_HEIGHT, ITEM_PADDING_TOP } from "../Const";
import { Input, InputLabel, Select, MenuItem } from "@material-ui/core";

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
        <div className="Complexity">
            <InputLabel className="Complexity-label" id="complexity-label">Game complexity level</InputLabel>
            <Select
                labelId="complexity-label"
                id="complexity"
                className="Complexity-value"
                onChange={(e, item) => {
                    props.onComplexityChanged(e, item.props.value)
                }}
                MenuProps={MenuProps}
                input={<Input />}
                value={props.complexity || DEFAULT_COMPLEXITY}
            >
                {COMPLEXITY_LEVELS.map(({name}) => (
                    <MenuItem key={name} value={name}>
                    {name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}