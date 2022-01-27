import { ICellRendererParams } from "ag-grid-community";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const Edit = (props: ICellRendererParams) => {
  return (
    <>
      <Link to={`/users/${props.data._id}`}>
        <Icon>
          <EditIcon />
        </Icon>
      </Link>
    </>
  );
};

export default Edit;
