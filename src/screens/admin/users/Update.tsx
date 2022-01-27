import { ICellRendererParams } from "ag-grid-community";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

// import { useDispatch } from "react-redux";

const Edit = (props: ICellRendererParams) => {
    // const dispatch = useDispatch();
    console.log(props,'props1')
    return (
        <>
            <Link to={`/user/${props.data._id}`}>
                <Icon>
                    <EditIcon />
                </Icon>
            </Link>

        </>
    );
};

export default Edit;
