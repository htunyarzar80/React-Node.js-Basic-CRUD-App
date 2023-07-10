import {v4 as uuid} from'uuid';

let users =[];

export const getUsers =(req,res)=>{
    res.send(users)
}

export const getUser =(req,res)=>{
    const singleUser = users.filter((user)=> user.id === req.params.id)

    res.send(singleUser)
}

export const createUser =(req,res)=>{
    const user = req.body;

    users.push({...user,id: uuid()})
    res.send("User Added Successfully")
}


export const deleteUser =(req,res)=>{
     users = users.filter((user)=> user.id !== req.params.id);

    res.send("User deleted Successfully")
}

export const updateUser =(req,res)=>{
 const user = users.find((user)=> user.id === req.params.id);

 if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    user.address = req.body.address;
    res.send("User Updated Successfully");
  } else {
    res.status(404).send("User not found");
  }
}