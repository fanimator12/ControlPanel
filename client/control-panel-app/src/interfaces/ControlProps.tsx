import { SelectChangeEvent } from "@mui/material";

interface ControlProps {
    handleControl: (e: SelectChangeEvent) => void;
    controlType: string;
}

export default ControlProps;