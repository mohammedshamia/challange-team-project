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
    <div>
      {props.sizes ? (
        <>
          <p style={{ color: "#707070", fontSize: "18px", fontWeight: "500" }}>
            Size :
            <span style={{ color: "black", fontWeight: "700" }}>{value}</span>
          </p>
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
          <p style={{ color: "#707070", fontSize: "18px", fontWeight: "500" }}>
            Color :
            <span style={{ color: "black", fontWeight: "700" }}>{value}</span>
          </p>
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
