import { Pagination as Pag } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const Pagination = styled(Pag)((props) => ({
  color: props.theme.palette.text.primary,
  margin: "20px 0",
  "& ul": {
    justifyContent: "center",
  },
}));

export default function PaginationButtons({ count, page, onChange }: IProps) {
  return <Pagination count={count} page={page} onChange={onChange} />;
}
