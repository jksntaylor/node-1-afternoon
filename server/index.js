const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mc = require ('./controllers/messages_controller')
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));
const port = 3001;

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
