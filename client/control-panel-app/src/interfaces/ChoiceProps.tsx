import { SelectChangeEvent } from "@mui/material";

interface ChoiceTypeProps {
    handleChoice: (e: SelectChangeEvent) => void;
    parameterChoice: string;
}

export default ChoiceTypeProps;