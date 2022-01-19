import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";
import { useParams } from "react-router";
import RowComponent from "../../components/GlobalStyles/Row";
import ProdectCard from "../../components/ProdectCard";

const arr: Array<{ name: string }> = [
  { name: "one" },
  { name: "two" },
  { name: "threoe" },
  { name: "foukjre" },
  { name: "thmnoree" },
  { name: "fou-rnme" },
];

export default function SearchPage() {
  const { keyword } = useParams();

  let filter = (array: Array<{ name: string }>): ReactNode[] => {
    return array.map(
      (item) =>
        item.name.includes("o") && (
          <Grid item xs={12} md={6} lg={4}>
            <ProdectCard
              img="/static/img1.png"
              name={item.name}
              salary={45}
              valueRating={4}
              discountValue={3}
              key={item.name}
            />
          </Grid>
        )
    );
  };

  return (
    <Box p={"0 7%"}>
      <Box m="50px 0">
        <RowComponent
          title="Featured Products"
          widthDivider="20%"
          alignItems="center"
        />
      </Box>

      <Grid spacing={5} container sx={{ justifyContent: "center" }}>
        {filter(arr)}
      </Grid>
    </Box>
  );
}
// keyword as string
