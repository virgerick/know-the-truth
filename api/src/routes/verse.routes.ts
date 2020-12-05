import { Router } from 'express'
// import { loadVerses ,verses} from '../assets/resources/resource';
import { loadVerses } from '../controllers/verses.controller'
const router = Router();
let verses: Array<any> = [];

(async () => verses = await loadVerses('Spanish__Reina_Valera_(1909)__valera__LTR'))()



router.get('/verses', async (req, res) => {
      const { book_nr, chapter_nr, verse_nr } = req.query;
      console.log(book_nr, chapter_nr, verse_nr);
      
      let result: any
      if (book_nr != undefined && chapter_nr != undefined && verse_nr != undefined) {
            result = verses.find(x => x.book_nr === book_nr && x.chapter_nr === chapter_nr && x.verse_nr === verse_nr)
      }else
      if (book_nr != undefined && chapter_nr) {
            result = verses.filter(x => x.book_nr === book_nr && x.chapter_nr === chapter_nr)
      }else
      if (book_nr != undefined ) {
            result = verses.filter(x => x.book_nr === book_nr)
      }else {
            return res.json(verses)
      }
      // console.log(result)
      return res.json(result)

});

export default router