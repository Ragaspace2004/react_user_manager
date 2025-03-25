import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../static/AddUser.css";

function AddUser({ onAddUser }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSubmit = (data) => {
    setFormData(data); 
    console.log(data); 
    onAddUser(data); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input
        type="text"
        {...register("username", { required: true })}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      {errors.username && <p>Username is required</p>}

      <label>Email</label>
      <input
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <p>Email is required and must be valid</p>}

      <label>Password</label>
      <input
        type="password"
        {...register("password", { required: true })}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {errors.password && <p>Password is required</p>}

      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;