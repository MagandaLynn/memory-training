const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const connectDB = require('./config/db');
const {errorHandler} = require('./middleware/errorMiddleware');

const goalsRouter = require('./routes/goalRouter')

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalsRouter);

//custom errorHandler middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})