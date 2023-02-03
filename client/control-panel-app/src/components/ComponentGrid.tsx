import { Container, Grid, Typography } from "@mui/material";
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

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(9)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <div className="control-component">
              <Typography color="#000"> comp </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ComponentGrid;
