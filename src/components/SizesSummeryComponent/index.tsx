import React, { useCallback, useState } from "react";
import { SizeOptional, ButtonGroup } from "./SizeSummeryComponent.style";

interface Iprops {
  sizes: Array<string>;
}

export default function SizesSummeryComponent(props: Iprops) {
  let [value, setValue] = useState<string>("");

  let arr = [...props.sizes];

  let onChangeValue = useCallback((item: string): void => {
    let val: string = item;
    setValue(val);
  }, []);

  return (
    <div>
      <p style={{ color: "#707070", fontSize: "18px", fontWeight: "500" }}>
        Size :<span style={{ color: "black", fontWeight: "700" }}>{value}</span>
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
    </div>
  );
}
