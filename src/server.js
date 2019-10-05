import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import cors from 'cors';
import path from 'path';

const app = express();

mongoose.connect(
  'mongodb+srv://omnistack9:omnistack9@omnistack9-yenzq.mongodb.net/omnistack9?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//origin: 'http://localhost:3333' somente esse endereco pode acessa
//colocar dentro do cors({origin: 'http://localhost:3333'})
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.listen(3333);
