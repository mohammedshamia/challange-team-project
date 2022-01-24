import { Typography } from "@mui/material";
import { IColumn } from "../../../@types/table.types";
import Table from "../../../components/Table";
import {Container} from "../products/Products.styled";
import {useEffect} from "react";
import { getUsers} from "../../../redux/actions/user.actions";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../redux/store";
import Update from "./Update";

const columns: IColumn[] = [

  {
    name: "firstName",
      cellRenderer: (params) => `${params.data?.firstName}`,

  },
  {
    name: "lastName",
    cellRenderer: (params) => `${params.data?.lastName}`,
  }
  ,{
    name: "email",
      cellRenderer: (params) => `${params.data?.email}`,
  }
  // ,{
  //   name: "password",
  //     cellRenderer: (params) => `${params.data?.password}`,
  // }
  ,{
    name: "isAdmin",
      cellRenderer: (params) => `${params.data?.isAdmin}`,
  },
  {
    name: "dateOfBirth",
    cellRenderer: (params) => `${params.data?.dateOfBirth}`,
  },
  {
    name: "actions",
    cellRenderer: "ActionsRenderer",
  },

];

function Users () {
    // @ts-ignore
  const {
      users: { users },
  } = useSelector((state: AppState) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
      }, [dispatch]);


  return (
         <Container>
          <Typography variant="h2" color="text.primary">
            Users
          </Typography>
          <div style={{ width: "100%", margin: "auto" }}>
            <Table data={users} columns={columns}
                   frameworkComponents={{
                     ActionsRenderer: Update,
                   }}
             />
          </div>
      </Container>

  );
};

export default Users;
