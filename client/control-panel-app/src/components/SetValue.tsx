import { Box, FormControl, Input } from "@mui/material";
import ValueProps from "../interfaces/ValueProps";

const SetValue = ({value, handleValue, handleEnterPress}: ValueProps) => {

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl
        sx={{
          width: "70px",
          color: "#00FFEE",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00FFEE",
            opacity: "80%",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00FFEE",
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00FFEE",
          },
        }}
      >
        <Input
          defaultValue={value || 0}
          onChange={handleValue}
          onKeyPress={handleEnterPress}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#00FFEE",
            fontSize: "40px",
            fontFamily: "Seven Segment",
          }}
        />
      </FormControl>
    </Box>
  );
};

export default SetValue;
