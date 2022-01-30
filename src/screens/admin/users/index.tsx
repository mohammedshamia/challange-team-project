import { Typography } from "@mui/material";
import { IColumn } from "../../../@types/table.types";
import Table from "../../../components/Table";
import { Container } from "../products/Products.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Edit from "./Update";
import { AppState } from "../../../redux/store";
import { getAllUsers } from "../../../redux/actions/user.actions";

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
    users: { allUsers },
  } = useSelector((state: AppState) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    // (async () => {
    //   setUsers(await fetchAllUsers(pages || 10));
    // })();
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Users
      </Typography>
      <div style={{ width: "100%", margin: "auto" }}>
        <Table
          data={allUsers}
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
