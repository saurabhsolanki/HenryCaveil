import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import "./CSS/userList.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUser } from "../../Redux/Auth/action";

const AllUserList = () => {
  const data = useSelector((store) => store.auth.allUser);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  console.log("all user data", data);

  return (
    <div id="usersListContainer">
      <h1>All User List</h1>

      <div id="allUserListDiv">
        {data.map((e, i) => (
          <div>
            <p>
              <strong>Name :-</strong> &nbsp; {e.name}
            </p>
            <p>
              <strong>Email :-</strong> &nbsp; {e.email}
            </p>
            <p>
              <strong>Phone :-</strong> &nbsp; {e.phone}
            </p>
            <Button variant="danger" onClick={() => handleDelete(e._id)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUserList;
