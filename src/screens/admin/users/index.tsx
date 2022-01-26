import { Icon, Typography } from "@mui/material";
import { IColumn } from "../../../@types/table.types";
import Table from "../../../components/Table";
import { Container } from "../products/Products.styled";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IUser } from "../../../@types/auth.types";
import { ICellRendererParams } from "ag-grid-community";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { fetchAllUsers } from "../../../utils/helpers";

const columns: IColumn[] = [
  {
    name: "firstName",
    cellRenderer: (params) => `${params.data?.firstName}`,
  },
  {
    name: "lastName",
    cellRenderer: (params) => `${params.data?.lastName}`,
  },
  {
    name: "email",
  },
  {
    name: "isAdmin",
  },
  {
    name: "dateOfBirth",
    cellRenderer: (params) => new Date(params.value).toLocaleDateString(),
  },
  {
    name: "actions",
    cellRenderer: "UsersActions",
  },
];

const Actions = (props: ICellRendererParams) => {
  return (
    <Link to={`/users/${props.data._id}`}>
      <Icon
        sx={{
          cursor: "pointer",
          background: "#fff",
          borderRadius: "6px",
        }}
      >
        <EditIcon sx={{ color: "#000", marginBottom: "5px" }} />
      </Icon>
    </Link>
  );
};

function Users() {
  const [users, setUsers] = useState<IUser[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setUsers(await fetchAllUsers(10));
    })();
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Users
      </Typography>
      <div style={{ width: "100%", margin: "auto" }}>
        <Table
          data={users as IUser[]}
          columns={columns}
          frameworkComponents={{
            UsersActions: Actions,
          }}
          paginationPageSize={10}
        />
      </div>
    </Container>
  );
}

export default Users;
