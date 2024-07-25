import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from 'react-hot-toast';


const UpdateUser = () => {

  const {id} =useParams();

  const [inputdata, setInputdata] = useState({
    name:'',
    email:'',
    password:''
  });


      //In Update first you get the data with respective id

     //First get data
     function getdata()
     {
       axios.get(`http://k8s-curd-mainlb-e9f042e71d-1350781151.ap-south-1.elb.amazonaws.com/api/getone/`+id)
       .then((res)=>{
         setInputdata(res.data)
       })
     }
      
     useEffect(()=>{
       getdata();
   
     },[id])
   
    // PUT the data 
    const history=useNavigate();
  
    function postdata(e)
    {
      e.preventDefault();
      axios.put(`http://k8s-curd-mainlb-e9f042e71d-1350781151.ap-south-1.elb.amazonaws.com/api/update/`+id,inputdata)
      .then((res)=>
      {
        toast.success("User Upddted Succefully",{position:"top-right"})
        history('/');
        
      })
    }


  return (
    <>
      <div className="container w-50 p-3 mt-5 bg-light rounded-1 ">
        <h4 className="mb-3 fw-bold">Update User </h4>
        <form onSubmit={postdata}>
        <div className="m-3">
            <label  className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              value={inputdata.name} onChange={(e)=> setInputdata({...inputdata,name:e.target.value})}
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
              value={inputdata.email} onChange={(e)=> setInputdata({...inputdata,email:e.target.value})}
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
              value={inputdata.password} onChange={(e)=> setInputdata({...inputdata,password:e.target.value})}
            />
          </div>
          <button type="submit" className="btn btn-primary m-3 ">
            Update Here
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
export default UpdateUser;
