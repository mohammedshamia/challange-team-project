import { Pagination as Pag } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IProps {
  count: number;
}

const Pagination = styled(Pag)((props) => ({
  color: props.theme.palette.text.primary,
}));

export default function PaginationButtons({ count }: IProps) {
  return <Pagination count={count} />;
}
