import express from 'express';

export const productRouter = express.Router(); // sub-router

productRouter.get('/', (req, res, next) => {
  // READ products (read data from database)
  console.log('GET /products');
});
productRouter.post('/', (req, res, next) => {
  // CREATE products (insert data into database)
  // POST /products
  console.log(req.headers['content-type']);
  console.log(req.body);
});
productRouter.get('/:id', (req, res, next) => {});
productRouter.put('/:id', (req, res, next) => {});
productRouter.delete('/:id', async (req, res, next) => {
  // CASE: Express v.4
  try {
    // await ...
  } catch (error) {
    next(error);
  }
  // CASE: Express v.5
  // await ...
});
