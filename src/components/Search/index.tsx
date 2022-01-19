import React, { useState } from "react";
import { Lable, SearchInput } from "./Search.style";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "../Button/Button.style";
import { Link } from "react-router-dom";

interface Iprops {
  width?: string;
}

export default function Search(props: Iprops) {
  let [value, setValue] = useState<string>("");
  const ref: any = React.createRef();

  const handleValue = (e: React.FormEvent<HTMLInputElement>): void => {
    let val: string = e.currentTarget.value.trim();
    setValue(val);
  };

  let handleKey = (e: any) => {
    let keyCode: any = e.keyCode;
    if (keyCode === 13 && value) {
      ref.current.click();
    }
  };

  return (
    <Lable width={props.width}>
      <SearchInput value={value} onChange={handleValue} onKeyUp={handleKey} />
      {/* <Link
        to={`${value.trim() !== "" ? `/search/${value}` : ""} `}
        style={{ width: "22%", minWidth: "120px", textDecoration: "none" }}
        > */}
      <Button
        as={Link}
        ref={ref}
        to={value && `/search/${value}`}
        borderRadius="6px"
        sx={{
          width: "22%",
          minWidth: "120px",
          textDecoration: "none",
          height: "40px",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        <SearchIcon /> Search
      </Button>
      {/* </Link> */}
    </Lable>
  );
}
