import { Grid, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { getData } from "../fake_data/fake_data";
import ControlType from "./ControlType";
import DisplayValue from "./DisplayValue";
import ParameterChoice from "./ParameterChoice";
import SetByOne from "./SetByOne";
import SetValue from "./SetValue";

const ControlBox = () => {
  const fake_data = getData();

  const [parameterChoice, setParameterChoice] = useState("[]");
  // const [parameterValue, setParameterValue] = useState(0);
  const [aValue, setAValue] = useState(fake_data[0].A);
  const [bValue, setBValue] = useState(fake_data[0].B);
  const [cValue, setCValue] = useState(fake_data[0].C);
  const [dValue, setDValue] = useState(fake_data[0].D);
  const [eValue, setEValue] = useState(fake_data[0].E);
  const [controlType, setControlType] = useState("[]");

  
  const handleIncrement = () => {
    if (parameterChoice == 'A')
      setAValue(aValue + 1);
    console.log("Value of A now: " + aValue);
    if (parameterChoice == 'B')
      setBValue(bValue + 1);
    console.log("Value of B now: " + bValue);
    if (parameterChoice == 'C')
      setCValue(cValue + 1);
    console.log("Value of C now: " + cValue);
    if (parameterChoice == 'D')
      setDValue(dValue + 1);
    console.log("Value of D now: " + dValue);
    if (parameterChoice == 'E')
      setEValue(eValue + 1);
    console.log("Value of E now: " + eValue);
  };

  const handleDecrement = () => {
    if (parameterChoice == 'A')
      setAValue(aValue - 1);
    console.log("Value of A now: " + aValue);
    if (parameterChoice == 'B')
      setBValue(bValue - 1);
    console.log("Value of B now: " + bValue);
    if (parameterChoice == 'C')
      setCValue(cValue - 1);
    console.log("Value of C now: " + cValue);
    if (parameterChoice == 'D')
      setDValue(dValue - 1);
    console.log("Value of D now: " + dValue);
    if (parameterChoice == 'E')
      setEValue(eValue - 1);
    console.log("Value of E now: " + eValue);
  }

  const handleChoice = (event: SelectChangeEvent) => {
    setParameterChoice(event.target.value);
    console.log("Parameter " + parameterChoice);
  };

  const handleControl = (event: SelectChangeEvent) => {
    setControlType(event.target.value);
    console.log("Control type " + "'" + controlType + "'");
  };

  const handleValue = (event: any) => {
    if (parameterChoice == "A") setAValue(event.target.value);
    console.log("Value of A now: " + aValue);
    if (parameterChoice == "B") setBValue(event.target.value);
    console.log("Value of B now: " + bValue);
    if (parameterChoice == "C") setCValue(event.target.value);
    console.log("Value of C now: " + cValue);
    if (parameterChoice == "D") setDValue(event.target.value);
    console.log("Value of D now: " + dValue);
    if (parameterChoice == "E") setEValue(event.target.value);
    console.log("Value of E now: " + eValue);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      aValue || bValue || cValue || dValue || eValue !== undefined &&
      aValue || bValue || cValue || dValue || eValue !== null &&
      aValue || bValue || cValue || dValue || eValue !== 0 &&
      controlType !== null
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
            value={aValue || bValue || cValue || dValue || eValue}
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
                value={aValue || bValue || cValue || dValue || eValue}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            )}

            {controlType == "set" && (
              <SetValue
                value={aValue || bValue || cValue || dValue || eValue}
                handleValue={handleValue}
                handleEnterPress={handleEnterPress}
              />
            )}

            {controlType == "display" && (
              <DisplayValue
                value={aValue || bValue || cValue || dValue || eValue}
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
