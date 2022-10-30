const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// medal aware....
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from node mongo curd server')
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})