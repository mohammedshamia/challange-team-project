import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { useParams } from "react-router";
import { Row } from "../../components/GlobalStyles/row";

export default function SearchPage() {
  const { keyword } = useParams();
  const arr: Array<{ name: string }> = [
    { name: "one" },
    { name: "two" },
    { name: "three" },
    { name: "foure" },
  ];

  let filter = (array: Array<{ name: string }>): ReactNode[] => {
    return array.map(
      (item) =>
        item.name.includes("o") && (
          <Grid item key={item.name}>
            {item.name}
          </Grid>
        )
    );
  };
  return (
    <div>
      <Row jsutfiyContent="Featured Products" width="100px"></Row>
      <Grid spacing={2} container sx={{ justifyContent: "center" }}>
        {filter(arr)}
      </Grid>
    </div>
  );
}
// keyword as string
