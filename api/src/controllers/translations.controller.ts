const translations= require('../assets/translations.json')
const getTrastlation=async ()=>{
   const translationsList:string[]=[]
   for(let translation in translations)
   {
       translationsList.push(translation)
   }
    return   translationsList;
}

export default{
    getTrastlation
}