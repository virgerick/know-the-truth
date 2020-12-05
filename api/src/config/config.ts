import dotenv from 'dotenv'

const configurations=dotenv.config();
// console.log(configurations);

export default{
    PORT:process.env.PORT||4000,
    MONGO_DATABASE:process.env.MONGO_DATABASE ||'bible-database',
    MONGO_USER:process.env.MONGO_USER||'admin',
    MONGO_PASSWORD:process.env.MONGO_PASSWORD||'admin',
    MONGO_HOST:process.env.MONGO_HOST||'localhost'
}