/*import { Rating, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '../../Button/Button.style'
import RatingComponent from '../../Rating'
import { Iprops } from '../Review'

export default function ReviewForm() {

     const [state, setstate] = useState<Iprops>({nameReviewer:'',timeOfReview:'',valueRating:0,optionsReviewer:''})
     const handleSubmit=(e: { preventDefault: () => void })=>{
e.preventDefault();

     }

    return (
        <form    >
      <TextField id="filled-basic" label="name reviwer:" variant="filled" />
       
       <Rating/>
      <TextField id="filled-basic" label="data:" variant="filled" />

      <TextField
  placeholder="discraption"
  multiline
  rows={1}
  maxRows={1}
/>
<Button  width='30%'  borderRadius='5px' height='40px'   >add anther review</Button>


        </form>
    )
}*/
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Rating, TextField } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: '90%'
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

const BootstrapDialogTitle = (props: DialogTitleProps) => {
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

export default function FormReview({
  handleSubmit,
  handleChange,
}: {
  handleSubmit: Function;
  handleChange: Function;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ color: "gold", border: "1px solid gold" }}
      >
        Add Anther Review
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ width: "1200px", maxWidth: "2200px" }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add Review
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <TextField
              label="name reviwer:"
              variant="filled"
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
            />

            <Rating onChange={(event, newValue) => {}} />
            <TextField
              id="filled-basic"
              label="data:"
              variant="filled"
              name="time"
            />

            <TextField
              placeholder="discraption"
              name="discrption"
              multiline
              rows={2}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <DialogActions>
              <Button
                type="submit"
                autoFocus
                onClick={handleClose}
                sx={{ color: "gold", border: "1px solid gold" }}
              >
                Add Review
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
