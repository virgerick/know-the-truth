import {Router} from 'express'
const router=Router();

router.get('/bible',(req,res)=>res.json('getting bibles'))

export default router