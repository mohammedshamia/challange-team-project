import React, { useState } from "react";
import { Lable, SearchInput } from "./Search.style";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "../Button/Button.style";
import { useNavigate } from "react-router-dom";

interface Iprops {
  width?: string;
}

export default function Search(props: Iprops) {
  let [value, setValue] = useState<string>("");
  const ref: any = React.createRef();
  const navigate = useNavigate();
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
  const handleSearch = React.useCallback(() => {
    if (value) navigate(`/search/${value}`);
  }, [navigate, value]);
  return (
    <Lable width={props.width}>
      <SearchInput value={value} onChange={handleValue} onKeyUp={handleKey} />

      <Button
        ref={ref}
        onClick={handleSearch}
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
    </Lable>
  );
}
