import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ReadUser = () => {
  const [users, setUsers] = useState([]);


  //Get all the data from the mongoDB...

  const getuser = async () => {
    await axios
      .get("http://localhost:5000/api/getall")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getuser();
  }, []);

  // Delete  User from the database

  const handledelete =async(id)=> {
   await axios.delete( `http://localhost:5000/api/delete/${id}`)
    .then(()=>{
      toast.success("User Deleted Succefully",{position:"top-right"})
      getuser();
    })
    .catch(err=>console.log(err))
  }


  return (
    <>
      <div className="container-fluid">
        <div className="nav mb-1 mt-2">
          <div className="menu">
            <h4 className="mb-3 fw-bold">List of All Users</h4>
            <Link to={"/create"}>
              <button className="btn btn-primary mb-3"> ADD New User</button>
            </Link>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-dark table-striped table-borderless table caption-top table align-center">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Edit Action</th>
                <th scope="col">Delete Action</th>
              </tr>
            </thead>
            {users.map((item, i) => {
              return (
                <>
                  <tbody>
                    <tr key={i}>
                      <th scope="row">{i+1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>
                        <Link to={`/update/`+item._id}>
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={()=>handledelete(item._id)}>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default ReadUser;
