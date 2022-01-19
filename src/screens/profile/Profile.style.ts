import styled from 'styled-components'
interface Iprops {
    borderRadius?: string;
    height?: string;
    width?: string;
}
export const Container =styled.div`
    margin: 214px 400px 140px 140px;
`
export const WrapperAvatarTab =styled.div`
    display: flex;
    justify-content:space-evenly;
    width: 100%;
    gap: 10px;
    & h2{
        margin: auto;
    }
  
   
`;
export const WrapperAvatar =styled.div`
    display: flex;
    justify-content: space-between;
  & h2{
     color:  ${props => props.theme.palette.text.primary};
  }
`
export const AvatarTab =styled.img<Iprops>((props) => ({
    width: props.width || "137px",
    height: props.height || "137px",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: props.borderRadius || "50%",
}));

export const LeftSide = styled.div`
  
 
`
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    & button {
      margin-top:50px
    } 
  
`
export const InfoUser = styled.div`
  margin-top: 65px;
  display: flex;
  gap: 44px;
  flex-direction: column;
    & div{
    display: flex;
    gap: 72px;
    width: 100%;
    & label{
      width: 100%;
      min-width: 130px;
      color:  ${props => props.theme.palette.text.secondary}; 
    }
    & p {
      width: 100%;
      min-width: 247px;
      align-items: flex-start;
    }
  }
  
`;
//ChangePasswordBtn
export const ChangePasswordBtn = styled.div`
  margin-top: 50px;
  & button {
      text-transform: none !important;
  }
`