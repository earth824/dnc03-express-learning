import express, {
  type NextFunction,
  type Request,
  type Response
} from 'express';

const app = express();

app.use(express.json());
// app.use(cors())

app.use((req, res, next) => {
  // throw new Error('Error from first');
  const error = new Error('Error from first');
  return next(error);
  // FIRST MIDDLEWARE
  console.log('FIRST MIDDLEWARE');
  next();
});

app.get('/books', (req, res, next) => {
  console.log('GET /books');
  res.json('GET /books');
});

app.get(
  '/users',
  (req, res, next) => {
    // AUTHENTICATE MIDDLEWARE
  },
  (req, res, next) => {
    // GET USER
  }
);

app.use((req, res, next) => {
  // SECOND MIDDLEWARE
  console.log('SECOND MIDDLEWARE');
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  // ERROR HANDLING MIDDLEWARE 1
  console.log('ERROR MIDDLEWARE 1');
  next(error);
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  // ERROR HANDLING MIDDLEWARE 2
  console.log('ERROR MIDDLEWARE 2');
});

app.listen(8000, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('server running on port: 8000');
  }
});
