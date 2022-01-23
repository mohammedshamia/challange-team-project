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
      <Column justfiyContent="center" width="fit-content">
        <Row justfiyContent="center" width="auto">
          <ImageContainer style={{ width: "300px", height: "300px" }}>
            <Image />
          </ImageContainer>
        </Row>
        <Row justfiyContent="center" width="auto">
          <ImageContainer style={{ width: "99px", height: "99px" }}>
            {values["images"]?.[1] ? (
              <img
                src={
                  typeof values["images"]?.[1] === "object"
                    ? URL.createObjectURL(values["images"]?.[1])
                    : values["images"]?.[1]
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
                  typeof values["images"]?.[2] === "object"
                    ? URL.createObjectURL(values["images"]?.[2])
                    : values["images"]?.[2]
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
                  typeof values["images"]?.[3] === "object"
                    ? URL.createObjectURL(values["images"]?.[3])
                    : values["images"]?.[3]
                }
                alt="images"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <Add />
            )}
          </ImageContainer>
        </Row>
      </Column>
      {errors["images"] && (
        <Typography variant="caption" color="red">
          {errors["images"]}
        </Typography>
      )}
    </>
  );
};

export default ImageUpload;
