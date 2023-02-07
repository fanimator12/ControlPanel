import { Box, FormControl, Input } from "@mui/material";
import { useState } from "react";
import ValueProps from "../interfaces/ValueProps";

const SetValue = ({handleValue}: ValueProps) => {

  const [parameterValue, setParameterValue] = useState(0);

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
          defaultValue={parameterValue || 0}
          onKeyPress={handleValue}
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
