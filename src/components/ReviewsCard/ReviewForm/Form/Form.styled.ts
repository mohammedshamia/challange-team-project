import styled from "styled-components";
import { Form} from 'formik';

 export const  FormContiner = styled(Form)`
    display: flex;
    flex-direction: column;
    gap:35px;
    color: ${props => props.theme.palette.text.disabled} ;
    font-family: "Raleway", sans-serif;
    width:100%;
    padding:10px 20px;
`;

export const  AddReviewButton = styled.button`
    border:1px solid ${props => props.theme.palette.primary.main} ;
    background:${props => props.theme.palette.primary.main} ;
    height:62px;
    font-size:24px;
    color:${props => props.theme.palette.secondary.main} ;
    width:324px;
    margin-left:32%;
    margin-bottom:'20px';

`;

