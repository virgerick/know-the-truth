import { Router } from 'express'
import {bibles,loadBible} from '../controllers/verses.controller'
import { IBook } from '../interfaces/IBook';
const router = Router();
let verses: Array<IBook> = [];
loadBible();

router.get('/bible', (req,res)=>{
      return res.json(bibles.filter(b=>b.language==="Spanish"))
})
router.get('/bibleCount', (req,res)=>{
      return res.json(bibles.length)
})
router.get('/biblebooks', (req,res)=>{
      const bookname= bibles[0].books.map(x=>x.id)
      return res.json(bookname)
})

router.get('/verses', async (req, res) => {
      const { book_nr, chapter_nr, verse_nr } = req.query;
      console.log(book_nr, chapter_nr, verse_nr);

      let result: any
      try {
            result = verses.filter(x => x.id === book_nr)
            console.log('book', result)
      } catch (error) {
            console.error(error);

      }


      if (book_nr != undefined && chapter_nr != undefined && verse_nr != undefined) {
            result = verses.find(x => x.id === book_nr)//&& x. === chapter_nr && x.verse_nr === verse_nr)
      }
      //else
      // if (book_nr != undefined && chapter_nr) {
      //       result = verses.filter(x => x.book_nr === book_nr && x.chapter_nr === chapter_nr)
      // }else
      // if (book_nr != undefined ) {
      //       result = verses.filter(x => x.book_nr === book_nr)
      // }else {
      //       return res.json(verses)
      // }
      // console.log(result)
      return res.json(verses)

});

export default router