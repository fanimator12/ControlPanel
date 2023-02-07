import { Container, Grid, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiRoot } from "../api/api_root";
import ControlPanelHandlers from "./ControlPanelHandlers";
import ParameterChoice from "./ParameterChoice";
import ControlType from "./ControlType";
import SetValue from "./SetValue";
import SetByOne from "./SetByOne";
import DisplayValue from "./DisplayValue";

const ControlGrid = () => {
  const [controlpanel, setControlPanel] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [parameterValue, setParameterValue] = useState(0);
  const [parameterChoice, setParameterChoice] = useState("[]");
  const [controlType, setControlType] = useState("[]");

  const handleIncrement = async () => setParameterValue(parameterValue + 1);
  const handleDecrement = async () => setParameterValue(parameterValue - 1);

  let { controlpanel_id } = useParams();

  const fetchControlPanel = async () => {
    try {
      setLoading(true);
      const results = await getApiRoot().get(`/${controlpanel_id}/`);
      setControlPanel(results.data);
      setLoading(false);
    } catch (error) {
      setControlPanel({});
      setLoading(false);
      setError(true);
    }
  };

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

  useEffect(() => {
    fetchControlPanel();
  }, [controlpanel_id]);

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
    <Container sx={{ width: "100%" }}>
      <Grid
        container
        spacing={3}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          width: { xs: "auto", md: "45em" },
          marginTop: "8em",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <ControlPanelHandlers />
        <Grid item>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default ControlGrid;
