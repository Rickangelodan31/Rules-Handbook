const express = require('express');
const mongoose = require('mongoose');
const QA = require('./models/Q&A.models');

const app = express();

app.get('/', (req, res) => {
    res.json({message: 'All good'});
});
app.get('/qa', async (req, res) => {
    const QAs = await QA.find()
    res.json({message: 'QA endpoint is working', data: QAs});
});

mongoose
.connect('mongodb://127.0.0.1:27017/rules-handbook')
.then(x => { console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`) 
app.listen(5000, () => {
    console.log('Server is running http://localhost:5000')
})

})
.catch(err => {
    console.error('Error connecting to mongo', err)
});