const port = process.env.PORT || 3000;

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('this test is done...')
})

app.listen(port, () => {
    console.log('running..')
})