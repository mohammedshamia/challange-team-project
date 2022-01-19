import styled from "styled-components";
import { Form} from 'formik';

 export const  FormContiner = styled(Form)`
  display: flex;
  flex-direction: column;
 gap:25px;
  color: #777;
  font-family: "Raleway", sans-serif;
  width:100%;
`;

export const  AddReviewButton = styled.button`
background:#FCDD06;
  height:62px;
   font-size:24px;
    color:white;
    width:324px;
    margin-left:40%;
    padding:0;
   text-transform:uppercase;
   margin-block:20px;

`;

