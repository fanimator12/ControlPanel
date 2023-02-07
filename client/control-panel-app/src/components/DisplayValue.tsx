import { Typography } from "@mui/material";
import ChoiceTypeProps from "../interfaces/ChoiceProps";

const DisplayValue = ({parameterChoice}: ChoiceTypeProps) => {

  const test_data = {
    id: 1,
    name: "test_panel",
    A: 48,
    B: 95,
    C: -15,
    D: -56,
    E: 22,
  };

  return (
    <Typography
      sx={{
        color: "#00FFEE",
        fontSize: "40px",
        fontFamily: "Seven Segment",
      }}
    >
      {parameterChoice == "A" && test_data.A}
      {parameterChoice == "B" && test_data.B}
      {parameterChoice == "C" && test_data.C}
      {parameterChoice == "D" && test_data.D}
      {parameterChoice == "E" && test_data.E}
    </Typography>
  );
};

export default DisplayValue;
