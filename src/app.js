const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');
const morgan = require ('morgan');
const blogRouter = require('./routes/blogRouter');
const entretaimentRouter = require('./routes/entretaimentRouter');
const politicRouter = require('./routes/politicRouter');
const sportRouter = require('./routes/sportRouter');

dotenv.config();

const app=express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/blog', blogRouter)
app.use('/api/entretaiment', entretaimentRouter)
app.use('/api/politic', politicRouter)
app.use('/api/sport', sportRouter)

module.exports = {
    app
};