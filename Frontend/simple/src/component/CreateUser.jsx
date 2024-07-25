import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useNavigate();


  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://k8s-curd-mainlb-e9f042e71d-1350781151.ap-south-1.elb.amazonaws.com/api/create",{name,email,password})
      .then((res) => {
        history('/')
        toast.success("User Created Succefully",{position:"top-right"})
      })
      .catch((err) => console.log(err));
  };
  

  return (
    <>
      <div className="container w-50 p-3 mt-5 bg-light rounded-1 ">
        <h4 className="mb-5 fw-bold"><u>Add New User</u></h4>
        <form onSubmit={handlesubmit}>
          <div className="m-3">
            <label  className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="m-3">
            <label  className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="m-3 ">
            <label  className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary m-3 ">
            Submit Here
          </button>
          <Link to={"/"}>
            <button type="button" className="btn btn-primary m-3">
              Back
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};
export default CreateUser;
