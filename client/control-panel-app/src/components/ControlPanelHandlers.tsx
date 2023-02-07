import { Grid, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getApiRoot } from "../api/api_root";
import styleTypography from "./styleTypography";

const ControlPanelHandlers = () => {
  const [controlpanel, setControlPanel] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let { controlpanel_name } = useParams();

  const handleNew = async (event: any) => {
    try {
      setLoading(true);
      setControlPanel({});
      setLoading(false);
      console.log("New control panel created.");
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("Something went wrong. ", error);
    }
  };

  const handleDelete = async (event: any) => {
    try {
      setLoading(true);
      const results = await getApiRoot().delete(`/${controlpanel_name}`);
      setControlPanel(results.data);
      setLoading(false);
      console.log("Control panel removed.");
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("Something went wrong. ", error);
    }
  };

  const handleSave = async (event: any) => {
    try {
      setLoading(true);
      const results = await getApiRoot().post(`/`);
      setControlPanel(results.data);
      setLoading(false);
      console.log("Control panel saved.");
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("Something went wrong. ", error);
    }
  };

  return (
    <Grid
      container
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Grid sx={{}}>
        <Button
          className="button"
          onClick={handleNew}
          sx={{ borderRadius: "10px" }}
        >
          <div className="button-inside">
            <Typography sx={styleTypography}>New</Typography>
          </div>
        </Button>
        <Button
          className="button"
          onClick={handleDelete}
          sx={{ borderRadius: "10px" }}
        >
          <div className="button-inside">
            <Typography sx={styleTypography}>Delete</Typography>
          </div>
        </Button>
      </Grid>
      <Grid>
        <Button
          className="button"
          onClick={handleSave}
          sx={{ borderRadius: "10px" }}
        >
          <div className="button-inside">
            <Typography sx={styleTypography}>Save</Typography>
          </div>
        </Button>
      </Grid>
    </Grid>
  );
};

export default ControlPanelHandlers;
