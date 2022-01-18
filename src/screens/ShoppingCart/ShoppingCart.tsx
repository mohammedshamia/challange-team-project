import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import ShoppingCart from "../../components/Card/ShoppingCart";
import SubTotalCard from "../../components/SubTotalCard/SubTotalCard";

interface ShoppingCartProps {
  title: string;
  counter: string;
  price: string;
}

export default function ShoppingCartPage() {
  const arr: Array<ShoppingCartProps> = [
    { title: "one", counter: "9", price: "678" },
    { title: "two", counter: "83", price: "6782" },
    { title: "three", counter: "23", price: "82" },
  ];

  return (
    <Box p={"0 7%"}>
      <Box p={"30px 0"}>
        <BasicBreadcrumbs itemName="Shopping Cart" />
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          {arr.map((item: ShoppingCartProps) => {
            return (
              <Box mb="32px">
                <ShoppingCart
                  title={item.title}
                  counter={item.counter}
                  price={item.price}
                />
              </Box>
            );
          })}
        </Grid>
        <Grid item xs={12} lg={3} sx={{ order: { xs: 0, lg: 2 } }}>
          <SubTotalCard
            priceAfterDiscount="$999.97"
            priceBeforeDiscount="$989.97"
            numberOfItems={arr.length}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
