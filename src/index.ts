import express from 'express';
import dotenv from 'dotenv'; 
import quotes from './routes/quotes'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', quotes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});