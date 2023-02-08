import { Grid, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import ControlType from "./ControlType";
import DisplayValue from "./DisplayValue";
import ParameterChoice from "./ParameterChoice";
import SetByOne from "./SetByOne";
import SetValue from "./SetValue";

const ControlBox = () => {
  const [parameterValue, setParameterValue] = useState(0);
  const [parameterChoice, setParameterChoice] = useState("[]");
  const [controlType, setControlType] = useState("[]");

  const handleIncrement = async () => setParameterValue(parameterValue + 1);
  const handleDecrement = async () => setParameterValue(parameterValue - 1);

  const handleChoice = async (event: SelectChangeEvent) => {
    await setParameterChoice(event.target.value);
    console.log("Parameter " + parameterChoice);
  };

  const handleControl = async (event: SelectChangeEvent) => {
    await setControlType(event.target.value);
    console.log("Control type " + "'" + controlType + "'");
  };

  const handleValue = async (event: any) => {
    await setParameterValue(event.target.value);
    console.log("Value " + parameterValue);
  };

  const handleEnterPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      parameterValue !== undefined &&
      parameterValue !== null &&
      parameterValue !== 0 &&
      controlType
    ) {
      handleValue;
    }
  };

  return (
    <div className="control-component inactive">
      <div className="control-component-inside">
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
        >
          <ParameterChoice
            handleChoice={handleChoice}
            parameterChoice={parameterChoice}
          />
          <ControlType
            handleControl={handleControl}
            controlType={controlType}
          />
          <Grid
            xs={12}
            container
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            {controlType == "+/-" && (
              <SetByOne
                value={parameterValue}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            )}

            {controlType == "set" && (
              <SetValue
                value={parameterValue}
                handleValue={handleValue}
                handleEnterPress={handleEnterPress}
              />
            )}

            {controlType == "display" && (
              <DisplayValue
                handleChoice={handleChoice}
                parameterChoice={parameterChoice}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ControlBox;
