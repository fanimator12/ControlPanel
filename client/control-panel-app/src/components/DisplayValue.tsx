import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiRoot } from "../api/api_root";
import ChoiceTypeProps from "../interfaces/ChoiceProps";

const DisplayValue = ({ parameterChoice }: ChoiceTypeProps) => {
  const [parameter, setParameter] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let { controlpanel_name } = useParams();

  const fetchParameter = async () => {
    try {
      setLoading(true);
      const results = await getApiRoot().get(`/${controlpanel_name}/parameters/${parameterChoice}/`);
      setParameter(results.data);
      setLoading(false);
    } catch (error) {
      setParameter({});
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchParameter();
  }, [parameterChoice]);

  return (
    <Typography
      sx={{
        color: "#00FFEE",
        fontSize: "40px",
        fontFamily: "Seven Segment",
      }}
    >
      {parameterChoice == "A" && parameter.A}
      {parameterChoice == "B" && parameter.B}
      {parameterChoice == "C" && parameter.C}
      {parameterChoice == "D" && parameter.D}
      {parameterChoice == "E" && parameter.E}
    </Typography>
  );
};

export default DisplayValue;
