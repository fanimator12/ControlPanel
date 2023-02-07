import {
  SelectChangeEvent,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import ChoiceProps from "../interfaces/ChoiceProps";
import styleTypography from "./styleTypography";

const ParameterChoice = ({ handleChoice, parameterChoice }: ChoiceProps) => {
  return (
    <FormControl sx={{ minWidth: 30 }}>
      <Select
        value={parameterChoice}
        onChange={handleChoice}
        autoWidth
        label="Parameter"
        sx={{
          fontSize: "20px",
          fontFamily: "Seven Segment",
          color: "#00FFEE",
          // "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
          //   padding: "16px 15px",
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
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00FFEE",
          },
        }}
      >
        <MenuItem sx={styleTypography} value={"[]"}>
          []
        </MenuItem>
        <MenuItem sx={styleTypography} value={"A"}>
          A
        </MenuItem>
        <MenuItem sx={styleTypography} value={"B"}>
          B
        </MenuItem>
        <MenuItem sx={styleTypography} value={"C"}>
          C
        </MenuItem>
        <MenuItem sx={styleTypography} value={"D"}>
          D
        </MenuItem>
        <MenuItem sx={styleTypography} value={"E"}>
          E
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ParameterChoice;
