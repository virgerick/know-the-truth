const translations = require('../assets/translations.json')
const getTranslationsName = async () => {
    const translationsList: string[] = []
    for (let translation in translations) {
        translationsList.push(translation)
    }
    return translationsList;
}

const getByName = (name: string) => {

    return translations[name];
}

const getAllLanguages = async () => {
    const languages: any[] = []
    try {
        const translationsList = await getTranslationsName();
        console.log(translationsList);

        translationsList.forEach((name) => {
            languages.push(getByName(name));
        })
    } catch (error) {
        console.error(error);

    }
    return languages;
}

const getVersionByLanguage=(language:string)=>{
    const versions:string[]=[]
    for(let p in translations){
        const item=translations[p];
        if(item["language"]===language){
            console.log(item);
            versions.push(item.translation)
        }
            
    }
    return versions
}


export default {
    getTranslationsName,
    getByName,
    getAllLanguages,
    getVersionByLanguage
}