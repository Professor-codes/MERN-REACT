import axios from "axios";
import React, { useState } from "react";
import { ProjectLoader } from "../Project/ProjectLoader";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const ApiProject1 = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getApiData = async () => {
    setIsLoading(true);

    const users = await axios.get("https://node5.onrender.com/user/user");
    setUsers(users.data.data);

    setIsLoading(false);
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    );
    console.log(res);

    if (res.status === 204) {
      // alert(id)
      navigate("/project-1");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <h1>API PROJECT 1</h1>
      <button
        onClick={() => {
          getApiData();
        }}
      >
        Get data
      </button>
      <table className="table_data">
        <thead className="table_head">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  {/* <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                  >
                    DELETE
                  </button> */}
                  {/* <Link
                    className="btn-link-details"
                    to={`/userdetails/${user._id}`}
                  >
                    DETAILS
                  </Link> */}
                  {/* <Link className='btn-link-update' to={`/updateuser/${user._id}`}>UPDATE</Link> */}

                  {/* REUSE BUTTON COMPONENT  */}
                  <Button onClick={() => {
                      deleteUser(user._id);
                    }} title="DELETE" className="btn-link-delete"/>
                  <Button title="DETAILS" className="btn-link-details"/>
                  <Button title="UPDATE" className="btn-link-update"/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>{isLoading && <ProjectLoader />}</div>
    </div>
  );
};
