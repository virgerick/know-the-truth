import fs from 'fs'

const staticBasePath = './assets/resources';
// export const verses: any = []

export const loadVerses = async (fileName: string):Promise<Array<any>> => {
    // assets/resources/Spanish__Reina_Valera_(1909)__valera__LTR.txt
    // let result:string='';
    const verses:Array<any>=[]
    try {
        const path: string = `./src/assets/resources/${fileName}.txt`;
        const nameSplit: Array<string> = fileName.split('__');
        const direction: string = nameSplit[nameSplit.length - 1];
        const version: string = nameSplit[nameSplit.length - 2];

        const file= await fs.readFileSync(path, 'utf8')//, (err, data) => {
        
        
            // // console.log(data);
            // const array = data.toString().split('||');
            //     const verse = {
            //         direction,
            //         version,
            //         book_nr: array[0],
            //         chapter_nr: array[1],
            //         verse_nr: array[2],
            //         verse: array[3],

            //     }
            //     // console.log(verse);

            //     verses.push(verse);

            
          
        if (file != null) {
          const lines =file.split('\n');
            lines.forEach(line => {
                const array = line.toString().split('||');
                const verse = {
                    direction,
                    version,
                    book_nr: array[0],
                    chapter_nr: array[1],
                    verse_nr: array[2],
                    verse: array[3],

                }
                verses.push(verse);

            })
            
        }
    } catch (error) {
        throw new Error(error);

    }

     return verses;

}