const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const auth = require('./routes/auth.route');
const user = require('./routes/user.route');
const post = require('./routes/post.route');
const comment = require('./routes/comment.route');

const app = express();
dotenv.config({ path: './api/config/.env' });
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL)
    .then(response => {
        console.log(`Database connected successfully on ${response.connection.host}`);
    }).catch(error => {
        console.log(error);
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use((err,req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message
    })
})

