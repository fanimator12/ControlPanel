import { SelectChangeEvent } from "@mui/material";

interface ChoiceTypeProps {
    value: Number;
    handleChoice: (e: SelectChangeEvent) => void;
    parameterChoice: string;
}

export default ChoiceTypeProps;