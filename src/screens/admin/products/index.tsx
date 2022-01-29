import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { IColumn } from "../../../@types/table.types";
import { Button } from "../../../components/Button/Button.style";
import { Row } from "../../../components/GlobalStyles";
import Table from "../../../components/Table";
import { Container } from "./Products.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Actions from "./components/Actions";
import { fetchAllProducts, minimizeID } from "../../../utils/helpers";
import { IProduct } from "../../../@types/products.types";

const columns: IColumn[] = [
  {
    name: "ID",
    // cellRenderer: (params) => `${params.data?._id}`,
    cellRenderer: (params) => `${minimizeID(params.data?._id)}`,
  },
  {
    name: "Product Name",
    cellRenderer: (params) => `${params.data?.name}`,
  },
  {
    name: "Price",
    cellRenderer: (params) => `$${params.data?.price}`,
  },
  {
    name: "Category",
    cellRenderer: (params) => `${params.data?.categories?.[0]}`,
  },
  {
    name: "actions",
    cellRenderer: "ActionsRenderer",
  },
];

const Products = () => {
  const {
    products: {
      loading,
      products: { pages },
    },
  } = useSelector((state: AppState) => state);

  const [products, setProducts] = useState<IProduct[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setProducts(await fetchAllProducts(pages || 10));
    })();
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Products
      </Typography>
      <Row justfiyContent="flex-end" width="100%">
        <Button
          disabled={loading}
          as={Link}
          sx={{ width: "fit-content", height: "fit-content", padding: "10px" }}
          to={"/products/new"}
        >
          {!loading ? (
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ paddingInline: "2em", textTransform: "capitalize" }}
            >
              Create Product
            </Typography>
          ) : (
            <CircularProgress size={20} color="inherit" />
          )}
        </Button>
      </Row>
      <div style={{ width: "100%", margin: "auto" }}>
        <Table
          data={products}
          columns={columns}
          frameworkComponents={{
            ActionsRenderer: Actions,
          }}
          paginationPageSize={10}
        />
      </div>
    </Container>
  );
};

export default Products;
