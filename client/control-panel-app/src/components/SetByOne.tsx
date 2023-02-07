import { Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ValueByOneProps from "../interfaces/ValueByOneProps";

const SetByOne = ({handleIncrement, handleDecrement}: ValueByOneProps) => {

  return (
    <>
      <Button
        onClick={handleIncrement}
        sx={{
          transition: "0.5s",
          width: "20px",
          "&:hover": {
            backgroundColor: "transparent",
            width: "50px",
            transition: "0.5s",
          },
        }}
      >
        <ControlPointIcon sx={{ color: "#00FFEE" }} />
      </Button>

      <Button
        onClick={handleDecrement}
        sx={{
          transition: "0.5s",
          width: "20px",
          "&:hover": {
            backgroundColor: "transparent",
            width: "50px",
            transition: "0.5s",
          },
        }}
      >
        <RemoveCircleOutlineIcon sx={{ color: "#00FFEE" }} />
      </Button>
    </>
  );
};

export default SetByOne;
