const {Router}=require('express')
const {getToDo, saveToDo, updateToDo, deleteToDo}=require('../controller/ToDocontroller.js')
const router=Router();

router.get('/',getToDo);
router.post('/save',saveToDo);
router.post('/update',updateToDo);
router.post('/delete',deleteToDo);

module.exports=router