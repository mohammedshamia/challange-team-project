import { Icon, Typography } from "@mui/material";
import { IColumn } from "../../../@types/table.types";
import Table from "../../../components/Table";
import { Container } from "../products/Products.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../../@types/auth.types";
import { ICellRendererParams } from "ag-grid-community";
import Edit from "./Update";
import { fetchAllUsers } from "../../../utils/helpers";
import { AppState } from "../../../redux/store";

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
    cellRenderer: "ActionsRenderer",
  },
];

function Users() {
  const {
    users: {
      users: { pages },
    },
  } = useSelector((state: AppState) => state);

  const [users, setUsers] = useState<IUser[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setUsers(await fetchAllUsers(pages || 10));
    })();
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Users
      </Typography>
      <div style={{ width: "100%", margin: "auto" }}>
        <Table
          data={users}
          columns={columns}
          frameworkComponents={{
            ActionsRenderer: Edit,
          }}
          paginationPageSize={10}
        />
      </div>
    </Container>
  );
}

export default Users;
