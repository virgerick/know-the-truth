import { Router } from 'express'
import TranstationsController from '../controllers/translations.controller'

const router = Router();
router.get('/translations', async (req, res) => {
    const translations = await TranstationsController.getTranslationsName();
    return res.json(translations)
})
router.get('/translations/:name', async (req, res) => {
    const { name } = req.params
    const translation = TranstationsController.getByName(name);

    return res.json(translation)
})

router.get('/Languages', async (req, res) => {
    const allVersion = await TranstationsController.getTranslationsName();
    const Languages: any[] = []
    allVersion.forEach(name => {
        const language = TranstationsController.getByName(name)["language"]
        Languages.push(language)
    });
    //get a distint in an array
    const result= Languages.filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);
    return res.json(result)
})
router.get('/translation/:language', async (req, res) => {
    const { language } = req.params
    console.log(language);
    
    const versions= TranstationsController.getVersionByLanguage(language);
    console.log(versions);
    
    return res.json(versions)
})

export default router