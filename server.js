const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json({ useNewUrlParser: true }));
app.use(express.static(path.resolve(__dirname('../client/build'))))

app.get('*', function(req, res) {
    res.sendFile(path.resolve('../client/build', 'index.html'))
})

app.listen(PORT, function() {
    console.log('app listening on port ' + PORT);
})
