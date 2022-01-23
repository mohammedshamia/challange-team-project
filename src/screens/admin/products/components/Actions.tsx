import { ICellRendererParams } from "ag-grid-community";
import { Icon, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from "../../../../components/ReviewsCard/ReviewForm";
import { useCallback, useState } from "react";
import { Button } from "../../../../components/Button/Button.style";
import { Row } from "../../../../components/GlobalStyles";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../../redux/actions/products.actions";
import { notify } from "../../../../utils/helpers";

const Edit = (props: ICellRendererParams) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = useCallback(() => {
    dispatch(
      deleteProduct(props.data._id, () => {
        notify("success", "Product Deleted Successfully");
      })
    );
  }, [props, dispatch]);

  return (
    <>
      <Link to={`/products/${props.data._id}`}>
        <Icon
          sx={{
            cursor: "pointer",
            background: "#fff",
            borderRadius: "6px",
          }}
        >
          <EditIcon sx={{ color: "#000", marginBottom: "5px" }} />
        </Icon>
      </Link>
      <Icon
        sx={{ cursor: "pointer", background: "#FC4059", borderRadius: "6px" }}
        onClick={() => setOpen(true)}
      >
        <DeleteIcon sx={{ color: "#fff", marginBottom: "5px" }} />
      </Icon>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="product-delete-dialog"
        open={open}
      >
        <BootstrapDialogTitle id="product-delete-dialog" onClose={handleClose}>
          <Typography variant="h6" color="red" sx={{ marginBottom: "2em" }}>
            Are you sure you want to delete {props.data.name} ?
          </Typography>
          <Row wrap gap="100px">
            <Button onClick={handleDelete}>Yes</Button>
            <Button onClick={handleClose}>No</Button>
          </Row>
        </BootstrapDialogTitle>
      </BootstrapDialog>
    </>
  );
};

export default Edit;
