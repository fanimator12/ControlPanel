import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiRoot } from "../api/api_root";
import ControlBox from "./ControlBox";
import ControlPanelHandlers from "./ControlPanelHandlers";

const ControlGrid = () => {
  const [controlpanel, setControlPanel] = useState<any>({});

  let { controlpanel_name } = useParams();

  const fetchControlPanel = async () => {
    try {
      const results = await getApiRoot().get(`/`);
      setControlPanel(results.data);
    } catch (error) {
      setControlPanel({});
    }
  };

  useEffect(() => {
    fetchControlPanel();
  }, [controlpanel_name]);

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
        {Array.from(Array(9)).map((_, index) => (
          <Grid item key={index}>
            <ControlBox />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ControlGrid;
