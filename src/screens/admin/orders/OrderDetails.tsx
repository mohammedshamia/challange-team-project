import { ICellRendererParams } from "ag-grid-community";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppState } from "../../../redux/store";
import Order from "../../payment/OrderDetails";
const OrderDetails = ({ params }: { params: ICellRendererParams }) => {
  // const params = useParams();
  const {
    orders: {
     
    },
  } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

 
  useEffect(() => {
  
      setOrder();

    console.log(params.data);
  }, []);
  return <>{/* <Order products={cart.items} cart={cart} /> */}</>;
};

export default OrderDetails;
