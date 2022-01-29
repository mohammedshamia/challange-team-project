import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { MainForm } from "./Form";
import { ContainerReviewsForm } from "./ReviewForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../../redux/actions/products.actions";
import { IProduct, IReview } from "../../../@types/products.types";
import { AppState } from "../../../redux/store";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    background: theme.palette.background.paper,
    padding: "2%",
    width: "80%",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function FormReview() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const {
    products: { product },
    auth,
  } = useSelector((state: AppState) => state);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = React.useCallback(
    (values) => {
      const values_: IReview = {
        ...values,
        name: `${auth.user.firstName} ${auth.user.lastName}`,
        createdAt: new Date().toString(),
      };
      dispatch(
        addReview(
          (product as IProduct)._id as string,
          values_ as IReview,
          () => {
            handleClose();
          }
        )
      );
    },
    [dispatch, product, auth]
  );

  return (
    <ContainerReviewsForm>
      <Typography
        color="primary.main"
        onClick={handleClickOpen}
        sx={{ textDecoration: "underline" }}
      >
        Add Review
      </Typography>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography variant="h2" fontSize="25px" color="text.primary">
            {" "}
            Add Review
          </Typography>
        </BootstrapDialogTitle>
        <MainForm handleSubmit={handleSubmit} />
      </BootstrapDialog>
    </ContainerReviewsForm>
  );
}
