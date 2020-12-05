import {Schema, model} from 'mongoose'

const verseSchema =new Schema({
    // book_ref:{
    //     type:String,
    //     required:true,
    //     trim:true
    // },
    book_nr:{
        type:String,
        required:true,
        trim:true
    },
    chapter_nr:{
        type:Number,
        required:true,
        trim:true
    },
    
    verse_nr:{
        type:Number,
        required:true,
        trim:true
    },
    verse:{
        type:String,
        required:true,
        trim:true
    },
    
})
// direction
//     type
//     version