import  { useForm }  from  "react-hook-form";

function AddUser(){

  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input type="text" {...register("username", { required: true })} />
      {errors.username && <p>Username is required</p>}
      <label>Email</label>
      <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <p>Email is required and must be valid</p>}

      <label>Password</label>
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <p>Password is required</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
export default AddUser;