import express from 'express';

import diaryRouter from './routes/diaries';

const app = express();
app.use(express.json()); // middleware to parse JSON

const PORT = 3000;

//Se coloca _ para indicar que no se usa el req
app.get('/ping',(_req,res) =>{
    console.log('someone pinged here !! ')
    res.send('pong')
})

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});