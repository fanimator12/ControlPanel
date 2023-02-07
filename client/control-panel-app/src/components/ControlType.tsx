import {
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import ControlProps from "../interfaces/ControlProps";
import styleTypography from "./styleTypography";

const ControlType = ({handleControl, controlType}: ControlProps) => {

  return (
    <FormControl sx={{ minWidth: 20 }}>
      <Select
        value={controlType}
        onChange={handleControl}
        autoWidth
        label="Control"
        sx={{
          fontSize: "20px",
          fontFamily: "Seven Segment",
          color: "#00FFEE",
          // "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
          //   padding: 2,
          // },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "& .MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00FFEE",
          },
          "& .MuiSelect-icon": {
            color: "#00FFEE",
            opacity: "80%",
          },
        }}
      >
        <MenuItem sx={styleTypography} value={"[]"}>
          []
        </MenuItem>
        <MenuItem sx={styleTypography} value={"+/-"}>
          +/-
        </MenuItem>
        <MenuItem sx={styleTypography} value={"set"}>
          Set
        </MenuItem>
        <MenuItem sx={styleTypography} value={"display"}>
          Disp
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ControlType;
