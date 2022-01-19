import { Column, Row } from "../../../components/GlobalStyles";
import styled from "styled-components";
import { Typography } from "@mui/material";

const Container = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.palette.text.secondary};
  padding-block: 0.5em;
  margin-bottom: 0.25em;
`;

const Product = () => {
  return (
    <Container>
      <Column justfiyContent="flex-start" width="100%" gap="10px">
        <img src={"/static/headphones.jpg"} alt="headphones" width={"90px"} />
        <Row justfiyContent="flex-start" width="100%">
          <Typography variant="caption" color="text.secondary">
            Apple Airpods Wireless Bluetooth Headset
          </Typography>
          <Column
            justfiyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="caption" color="text.secondary">
              $499.99 x1
            </Typography>
            <Typography variant="h6" color="text.primary">
              $499.99
            </Typography>
          </Column>
        </Row>
      </Column>
    </Container>
  );
};

export default Product;
