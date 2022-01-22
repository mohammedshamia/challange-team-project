import { Typography } from "@mui/material";
import { IColumn } from "../../../@types/table.types";
import Table from "../../../components/Table";
import {IUser} from "../../../@types/users.types";
import {Container} from "../products/Products.styled";
import {useEffect} from "react";
import { getUsers} from "../../../redux/actions/user.actions";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../../components/common/Loading";
import {AppState} from "../../../redux/store";

// const data :IUser[] = [
//   {
//     profileImage: " ",
//     firstName:'Amy',
//     lastName:'Mayer',
//     email:'amymay@gmail.com',
//     isAdmin:false,
//     dateOfBirth:''
//   },
//   {
//     profileImage: " ",
//     firstName:'Amy',
//     lastName:'Mayer',
//     email:'amymay@gmail.com',
//     isAdmin:false,
//     dateOfBirth:''
//   },
//   {
//     profileImage: " ",
//     firstName:'Amy',
//     lastName:'Mayer',
//     email:'amymay@gmail.com',
//     isAdmin:false,
//     dateOfBirth:''
//   },
//   {
//     profileImage: " ",
//     firstName:'Amy',
//     lastName:'Mayer',
//     email:'amymay@gmail.com',
//     isAdmin:false,
//     dateOfBirth:''
//   },
//   {
//     profileImage: " ",
//     firstName:'Amy',
//     lastName:'Mayer',
//     email:'amymay@gmail.com',
//     isAdmin:false,
//     dateOfBirth:''
//   },
//   {
//     profileImage: " ",
//     firstName:'Amy',
//     lastName:'Mayer',
//     email:'amymay@gmail.com',
//     isAdmin:false,
//     dateOfBirth:''
//   },
//   {
//     profileImage: " ",
//     firstName:'Amy',
//     lastName:'Mayer',
//     email:'amymay@gmail.com',
//     isAdmin:false,
//     dateOfBirth:''
//   },
//   {
//     profileImage: " ",
//     firstName:'Amy',
//     lastName:'Mayer',
//     email:'amymay@gmail.com',
//     isAdmin:false,
//     dateOfBirth:''
//   },
//
// ];

const columns: IColumn[] = [
  {
    name: "Avatar",
  },
  {
    name: "First Name",
  },
  {
    name: "Last Name",
  }
  ,{
    name: "Email",
  }
  ,{
    name: "Is Admin",
  },
  {
    name: "Date Of Birth",
  },


];

function Users () {
  // console.log(data,'data')

    // const content = useSelector(AllUsers); //this hook gives us redux store state
    // const users = useSelector((state) => state.content.users)
    // @ts-ignore
  const {
      users: { users },
  } = useSelector((state: AppState) => state.users);

    console.log(users,'content')
    const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getUsers());
        // console.log(data);
      }, [dispatch]);

  return (
      <>
          {!users?<Loading/>:
              users?
               <Container>
                <Typography variant="h2" color="text.primary">
                  Users
                </Typography>
                <div style={{ width: "100%", margin: "auto" }}>
                  <Table data={users} columns={columns} />
                </div>
            </Container>
        :
               <p>YOO</p>
      }
      </>

  );
};

export default Users;
