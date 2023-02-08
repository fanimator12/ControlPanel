import { Grid, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getApiRoot } from "../api/api_root";
import styleTypography from "./styleTypography";

const ControlPanelHandlers = () => {
  const [controlpanel, setControlPanel] = useState<any>(null);

  const handleNew = async (event: any) => {
    try {
      setControlPanel(null);
      console.log("New control panel created.");
    } catch (error) {
      console.log("Something went wrong. ", error);
    }
  };

  const handleDelete = async (event: any) => {
    try {
      // await getApiRoot().delete(`/`);
      setControlPanel(null);
      console.log("Control panel removed.");
    } catch (error) {
      console.log("Something went wrong. ", error);
    }
  };

  const handleSave = async (event: any) => {
    try {
      // const results = await getApiRoot().post(`/`);
      // setControlPanel(results.data);
      console.log("Control panel saved.");
    } catch (error) {
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
      <Grid>
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
