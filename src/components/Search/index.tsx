import React, { useState } from "react";
import { Lable, SearchInput } from "./Search.style";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "../Button/Button.style";
import { Link } from "react-router-dom";

export default function Search() {
  let [value, setValue] = useState<string>("");
  const ref: any = React.createRef();

  const handleValue = (e: React.FormEvent<HTMLInputElement>): void => {
    let val: string = e.currentTarget.value;
    setValue(val);
  };

  let handleKey = (e: any) => {
    let keyCode: any = e.keyCode;
    if (keyCode === 13) {
      ref.current.click();
    }
  };

  return (
    <Lable>
      <SearchInput value={value} onChange={handleValue} onKeyUp={handleKey} />
      <Button
        width="25%"
        backgroundColor="#FCDD06"
        borderRadius="6px"
        fontSize="16px"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          minWidth: "110px",
        }}
        as={Link}
        to="/search"
        ref={ref}
      >
        <SearchIcon /> Search
      </Button>
    </Lable>
  );
}
