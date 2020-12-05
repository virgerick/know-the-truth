import {Router} from 'express'
import translationsController from '../controllers/translations.controller';
import TranstationsController from '../controllers/translations.controller'

const router=Router();
router.get('/translations',async (req,res)=>{
    const translations=await translationsController.getTrastlation();
    
    for(let p in translations){
       console.log(p); 
    }
    return res.json(translations)
})

export default router