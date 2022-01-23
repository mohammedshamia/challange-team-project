import styled from "styled-components";
interface Iprops {
  borderRadius?: string;
  height?: string;
  width?: string;
}
export const Container = styled("div")((props) => ({
  padding: "5% 7%",
}));

export const WrapperAvatarTab = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 10px;
  & h2 {
    margin: auto;
  }
`;
export const WrapperAvatar = styled.div`
  display: flex;
  justify-content: space-between;
  & h2 {
    color: ${(props) => props.theme.palette.text.primary};
  }
`;
export const AvatarTab = styled.img<Iprops>((props) => ({
  width: props.width || "137px",
  height: props.height || "137px",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: props.borderRadius || "50%",
  objectFit: "cover",
}));

export const LeftSide = styled.div`
  width: 50%;
`;
export const RightSide = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  [props.theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
    "& img": {
      display: "none",
    },
  },
  "& button": {
    marginTop: "50px",
    textTransform: "none",
  },
}));

export const InfoUser = styled.div`
  margin-top: 65px;
  display: flex;
  gap: 44px;
  flex-direction: column;
  & div {
    display: flex;
    gap: 72px;
    width: 100%;
    & label {
      width: 100%;
      color: ${(props) => props.theme.palette.text.secondary};
    }
    & p {
      width: 100%;
      align-items: flex-start;
      color: ${(props) => props.theme.palette.text.primary};
    }
  }
`;
//ChangePasswordBtn
export const ChangePasswordBtn = styled.div`
  margin-top: 50px;
  & button {
    text-transform: none !important;
  }
`;
