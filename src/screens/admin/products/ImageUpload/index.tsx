import { Column, Row } from "../../../../components/GlobalStyles";
import { ImageContainer } from "../Products.styled";
import Image from "./Image";
import Add from "./Add";
import { Typography } from "@mui/material";

interface IProps {
  values: { [key: string]: any };
  errors: { [key: string]: any };
}

const ImageUpload = ({ values, errors }: IProps) => {
  return (
    <>
      <Row justfiyContent="center" width="fit-content">
        <Column justfiyContent="center" width="auto">
          <ImageContainer style={{ width: "300px", height: "300px" }}>
            <Image />
          </ImageContainer>
        </Column>
        <Column justfiyContent="center" width="auto">
          <ImageContainer style={{ width: "99px", height: "99px" }}>
            {values["images"]?.[1] ? (
              <img
                src={
                  values["images"]?.[1]
                    ? URL.createObjectURL(values["images"]?.[1])
                    : ""
                }
                alt="images"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <Add />
            )}
          </ImageContainer>
          <ImageContainer style={{ width: "99px", height: "99px" }}>
            {values["images"]?.[2] ? (
              <img
                src={
                  values["images"]?.[2]
                    ? URL.createObjectURL(values["images"]?.[2])
                    : ""
                }
                alt="images"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <Add />
            )}
          </ImageContainer>
          <ImageContainer style={{ width: "99px", height: "99px" }}>
            {values["images"]?.[3] ? (
              <img
                src={
                  values["images"]?.[3]
                    ? URL.createObjectURL(values["images"]?.[3])
                    : ""
                }
                alt="images"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <Add />
            )}
          </ImageContainer>
        </Column>
      </Row>
      {errors["images"] && (
        <Typography variant="caption" color="red">
          {errors["images"]}
        </Typography>
      )}
    </>
  );
};

export default ImageUpload;
