import { SelectChangeEvent } from "@mui/material";

interface ControlTypeProps {
  handleIncrement: (e: any) => void;
  handleDecrement: (e: any) => void;
  handleValue: (e: SelectChangeEvent) => void;
  controlType: string;
}

export default ControlTypeProps;
