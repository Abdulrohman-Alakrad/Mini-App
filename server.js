const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',);

let port = 8080;

app.listen(port, function() {
    console.log(`listening on port ${port}`);
  });