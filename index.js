const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

require('dotenv').config();
require('./db');
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/users', authRoutes );
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'Task Manager API is working'
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
