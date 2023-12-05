import express from 'express';
import {dirname,join} from 'path';
import { fileURLToPath } from 'url';

const app=express();


import indexRoutes from './routes/index.js'

const _dirname= dirname(fileURLToPath(import.meta.url))

app.set('views',join(_dirname,'views'))

app.set('view engine','ejs');


app.use(indexRoutes)
app.use(express.static(join(_dirname,'public')))

app.listen(3000);
console.log('Server is listening on port',3000);