import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getApiRoot } from "../api/api_root";
import { getData } from "../fake_data/fake_data";
import ChoiceTypeProps from "../interfaces/ChoiceProps";
import ValueProps from "../interfaces/ValueProps";

const DisplayValue = ({value, parameterChoice }: ChoiceTypeProps) => {
  const [controlpanel, setControlPanel] = useState({});
  const fake_data = getData();

  const fetchParameter = async () => {
    try {
      setControlPanel(fake_data);
      // const results = await getApiRoot().get(`/`);
      // setParameter(results.data);
    } catch (error) {
      setControlPanel({});
    }
  };


  useEffect(() => {
    fetchParameter();
  }, [parameterChoice, value]);

  return (
    <Typography
      sx={{
        color: "#00FFEE",
        fontSize: "40px",
        fontFamily: "Seven Segment",
      }}
    >
      {/* Only takes the first instance from the data */}
      {parameterChoice == "A" && fake_data[0].A}
      {parameterChoice == "B" && fake_data[0].B}
      {parameterChoice == "C" && fake_data[0].C}
      {parameterChoice == "D" && fake_data[0].D}
      {parameterChoice == "E" && fake_data[0].E}
    </Typography>
  );
};

export default DisplayValue;
