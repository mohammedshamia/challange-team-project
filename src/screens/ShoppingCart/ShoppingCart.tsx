import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import ShoppingCart from "../../components/Card/ShoppingCart";
import PaginationButtons from "../../components/common/Pagination";
import SubTotalCard from "../../components/SubTotalCard/SubTotalCard";

interface ShoppingCartProps {
  title: string;
  counter: string;
  price: string;
  imgSrc?: string;
  salePrice?: string;
}
const arr: Array<ShoppingCartProps> = [
  { title: "one", counter: "9", price: "678", imgSrc: "/static/img1.png" },
  {
    title: "two lkn jn jbouhbjhnmkmn jhbjlkn ",
    counter: "83",
    price: "6782$",
    imgSrc: "/static/headphones.jpg",
    salePrice: "987$",
  },
  { title: "thre;loe", counter: "23", price: "82" },
  {
    title: "one mn ljkk kn km ,mlknhjblkjnhhjb ijhb jn",
    counter: "9",
    price: "678$",
  },
  { title: "twfdoiojo", counter: "83", price: "6782" },
  { title: "ljnhkn jnkl", counter: "23", price: "82" },
  { title: "one", counter: "9", price: "678" },
  { title: "tw lkjn ghvhb o", counter: "83", price: "6782" },
  { title: "thrlikj ojiblkjn ee", counter: "23", price: "82" },
];

export default function ShoppingCartPage() {
  let cartItems = (): ReactNode => {
    return arr.map((item: ShoppingCartProps) => {
      return (
        <Box mb="32px">
          <ShoppingCart
            title={item.title}
            counter={item.counter}
            price={item.price}
            imgSrc={item.imgSrc || ""}
            salePrice={item.salePrice || ""}
          />
        </Box>
      );
    });
  };

  return (
    <Box p={"0 7%"}>
      <Box p={"30px 0"}>
        <BasicBreadcrumbs itemName="Shopping Cart" />
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          {cartItems()}
        </Grid>
        <Grid item xs={12} lg={3} sx={{ order: { xs: -1, lg: 22 } }}>
          <SubTotalCard
            priceAfterDiscount="$999.97"
            priceBeforeDiscount="$989.97"
            numberOfItems={arr.length}
          />
        </Grid>
      </Grid>
      <PaginationButtons count={6} />
    </Box>
  );
}
