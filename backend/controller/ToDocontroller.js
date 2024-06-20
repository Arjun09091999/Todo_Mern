const ToDomodel=require('../models/ToDomodels')

module.exports.getToDo=async (req,res)=>{
    const toDo=await ToDomodel.find()
    res.send(toDo)
}

module.exports.saveToDo=async (req,res)=>{
    const {text}=req.body
    ToDomodel
    .create({text})
    .then((data)=>{
        console.log("Added successfully")
        console.log(data)
        res.send(data)
    })
    
}

module.exports.updateToDo=async (req,res)=>{
    const {_id, text}=req.body
    ToDomodel
    .findByIdAndUpdate(_id, {text})
    .then(()=>res.send("Updattend successfully.."))
    .catch((err)=>console.log(err))
}

module.exports.deleteToDo=async (req,res)=>{
    const {_id}=req.body
    ToDomodel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Delete successfully.."))
    .catch((err)=>console.log(err))
}