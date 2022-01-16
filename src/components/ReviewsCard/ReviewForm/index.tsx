import { TextField } from '@mui/material'
import React from 'react'
import { Button } from '../../Button/Button.style'

export default function ReviewForm() {

   

    return (
        <form    >
      <TextField id="filled-basic" label="name reviwer:" variant="filled" />
      <TextField id="filled-basic" label="value rating:" variant="filled" />
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
}
