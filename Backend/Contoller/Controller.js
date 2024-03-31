const UserModel = require('../Db/Model');

//Create User API
const create = async (req,res)=>{
  await UserModel.create(req.body)

  .then(result => res.json(result))

  .catch((err)=>{
    res.status(500).json({msg:"Failed to insert data"})
  })

}


// Get all user API
const getAll = async (req, res)=>{
  try {

    const userdata = await UserModel.find();
    res.status(200).json(userdata)
    
  } catch (error) {

    res.status(500).json({msg:"Failed to insert data"})
    
  }
}

//Update API

const update = async (req,res)=>{
  try {
    
    const id = req.params.id;
    const updatedata = await UserModel.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(updatedata);
    
  } catch (error) {
    
    res.status(500).json({msg:"Failed to update"})
  }
}

// get one user

const getone =async(req,res)=>{
  try {
    const id = req.params.id;
    const userexist = await UserModel.findById(id);
    res.status(200).json(userexist)

    
  } catch (error) {
    res.status(500).json({msg:"user not found"})
    
  }

}

//Delele user API

const deleteone = async (req,res)=>{
  try {
    const id= req.params.id;
     const result=await UserModel.findByIdAndDelete(id)
    res.status(200).json({msg:"user Delete sucessfully "})
    
  } catch (error) {
    res.status(500).json({msg:"Failed to update"})
    
  }
}
 
module.exports = {create,getAll,update,deleteone,getone};
