import React, { useCallback, useState } from "react";
import { ColorOptional } from "./ColorSummery.style";

interface Iprops {
  colors: Array<string>;
}

export default function ColorsSummeryComponent(props: Iprops) {
  let [value, setValue] = useState<string>("");

  let arr = [...props.colors];

  let onChangeValue = useCallback((item: string): void => {
    let val: string = item;
    setValue(val);
  }, []);

  return (
    <div>
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
    </div>
  );
}
