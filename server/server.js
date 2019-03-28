const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.send('Hello Abraham');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})