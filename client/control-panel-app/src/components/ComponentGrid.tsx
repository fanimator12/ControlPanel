import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiRoot } from "../api/api_root";

function ComponentGrid() {
  const [panel, setPanel] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let { controlpanel_id } = useParams();

  const fetchControlPanel = async () => {
    try {
      setLoading(true);
      const results = await getApiRoot().get(
        `/controlpanels/${controlpanel_id}/`
      );
      setPanel(results.data);
      setLoading(false);
    } catch (error) {
      setPanel({});
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchControlPanel();
  }, [controlpanel_id]);

  const test_data = {
    id: 1,
    name: "test_panel",
    parameterA: 48,
    parameterB: 95,
    parameterC: -15,
    parameterD: -56,
    parameterE: 22,
    parameter: 'A'
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
        {Array.from(Array(9)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Button sx={{ borderRadius: "15px" }} className="control-component inactive">
              <div className="control-component-inside">
              <Typography color="#00FFEE" sx={{
                  padding: "5px",
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Seven Segment",
                }}> A </Typography>

                <Typography color="#00FFEE" sx={{
                  padding: "35px 0 35px 0",
                  fontSize: "90px",
                  fontFamily: "Seven Segment",
                }}> {test_data.parameterA} </Typography>
              </div>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ComponentGrid;
