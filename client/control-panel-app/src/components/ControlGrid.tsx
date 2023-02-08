import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiRoot } from "../api/api_root";
import ControlBox from "./ControlBox";
import ControlPanelHandlers from "./ControlPanelHandlers";

const ControlGrid = () => {
  const [controlpanel, setControlPanel] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let { controlpanel_name } = useParams();

  const fetchControlPanel = async () => {
    try {
      setLoading(true);
      const results = await getApiRoot().get(
        `/controlpanel/${controlpanel_name}/`
      );
      setControlPanel(results.data);
      setLoading(false);
    } catch (error) {
      setControlPanel({});
      setLoading(false);
      setError(true);
    }
  };

  // useEffect(() => {
  //   fetchControlPanel();
  // }, [controlpanel_id]);

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
