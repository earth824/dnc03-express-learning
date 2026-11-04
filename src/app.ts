import express from 'express';
import { productRouter } from './routes/product.route.js';

const app = express();

// REQUEST BODY: content-type
// - application/json
app.use(express.json());
// - application/x-www-form-urlencoded
app.use(express.urlencoded());
// - multipart/form-data: need third party middleware(multer, busboy, ...)

// app.get('/products', (req, res, next) => {});
// app.post('/products', (req, res, next) => {});
// app.get('/products/:id', (req, res, next) => {});
// app.put('/products/:id', (req, res, next) => {});
// app.delete('/products/:id', (req, res, next) => {});

app.use('/products', productRouter);

app.listen(8000, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('server running on port: 8000');
  }
});
