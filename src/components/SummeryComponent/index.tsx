import { Typography } from "@mui/material";
import { useCallback, useState } from "react";
import {
  ButtonGroup,
  ColorOptional,
  SizeOptional,
} from "./SummeryComponent.style";

interface Iprops {
  sizes?: Array<string>;
  colors?: Array<string>;
}

export default function SummeryComponent(props: Iprops) {
  let [value, setValue] = useState<string>("");

  let arr: string[] = props.colors
    ? [...props.colors]
    : props.sizes
    ? [...props.sizes]
    : [];

  let onChangeValue = useCallback((item: string): void => {
    let val: string = item;
    setValue(val);
  }, []);

  return (
    <div style={{width:"60%"}}>
      {props.sizes ? (
        <>
          <Typography
            color="text.secondary"
            sx={{ fontWeight: "500", margin: "10px 0" }}
          >
            Size : {value}
          </Typography>
          <ButtonGroup>
            {arr.map((item: string) => {
              return (
                <SizeOptional
                  key={item}
                  onClick={() => onChangeValue(item)}
                  active={value === item}
                >
                  {item}
                </SizeOptional>
              );
            })}
          </ButtonGroup>
        </>
      ) : props.colors ? (
        <>
          <Typography
            color="text.secondary"
            sx={{ fontSize: "18px", fontWeight: "500", margin: "10px 0" }}
          >
            Color : {value}
          </Typography>
          {arr.map((item: string) => {
            return (
              <ColorOptional
                key={item}
                color={item}
                onClick={() => {
                  onChangeValue(item);
                }}
                active={value === item}
              />
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
