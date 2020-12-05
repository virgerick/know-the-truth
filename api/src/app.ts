import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import config from './config/config'
import bibleRoutes from './routes/bible.routes'
import verseRoutes from './routes/verse.routes'
import translationsRoutes from './routes/translations.routes'

const app=express();


app.set('port',config.PORT);

app.use(morgan('dev'));
app.use(cors())
app.use(verseRoutes);
app.use(bibleRoutes);
app.use(translationsRoutes);

export default app;