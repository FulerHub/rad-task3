import express from 'express';
import notesRouter from './routes/notes';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/notes', notesRouter);

app.listen(7000, ()=>{
  console.log('Server start on PORT: ',7000)
});

module.exports = app;
