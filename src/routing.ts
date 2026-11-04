import express from 'express';

const app = express();

// MIDDLEWARE: parsing string(request body) to object and add it to req object
app.use(express.json());

// method: GET, path: /books, ENDPOINT: GET /books
app.get('/books', (req, res) => {
  console.log('GET /books');
  res.status(200).json('This is a book');
});
// method: POST, path: /products, ENDPOINT: POST /products
app.post('/products', (req, res) => {
  // READ REQUEST HEADER (req.headers)
  console.log(req.headers);
  // console.log(req.method, req.url);
  res.status(201).json('Create a new book');
});

// ENDPOINT GET /products
app.get('/products', (req, res) => {
  // READ REQUEST QUERY STRING (req.query)
  // ex. /products?q=co&page=3 => req.query = { q: 'co', page: '3' }
  console.log(req.query);
});

// ENDPOINT DELETE /products/:id
app.delete('/products/:id', (req, res) => {
  // READ PATH PARAMETER (req.params)
  // ex. /products/42 => req.params = { id: '42' }
  console.log(req.params);
});

// ENDPOINT POST /auth/login
// BODY { email: 'a@mail.com', password: '123456' }
app.post('/auth/login', (req, res) => {
  // READ REQUEST BODY (req.body). Remark: need parsing middleware(express.json())
  // ex. body => { email: 'a@mail.com', password: '123456' }
  console.log(req.body);
});

app.listen(8000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('server running on port: 8000');
  }
});
