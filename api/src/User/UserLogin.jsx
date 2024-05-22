import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const UserLogin = () => {

  var users = [
    {
      id: 1,
      username: "Jason",
      password: "1234",
    },
    {
      id: 2,
      username: "Elini",
      password: "5678",
    },
  ];

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  const submitHandler = (data) => {
    var loginUser = users.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    // console.log(loginUser)

    if (loginUser !== undefined) {
      alert("You are now logged in.");

      // localstorage
      localStorage.setItem("Id", loginUser.id);

      // navigate to home page
      navigate("/") 
    } else {
      alert("Login failed!");
    }
  };

  return (
    <div>
      <h1>User Login</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Username</label>
          <input type="text" {...register("username")} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" {...register("password")} />
        </div>
        <input type="submit" value="Login" style={{ marginTop: "26px" }} />
      </form>
    </div>
  );
};
