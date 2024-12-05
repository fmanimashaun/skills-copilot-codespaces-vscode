// Create web server
// Use the express module
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = [
    {
        id: 1,
        name: 'Jim',
        comment: 'Hello'
    },
    {
        id: 2,
        name: 'Kim',
        comment: 'Hi'
    }
];
let nextId = 3;
// Use body-parser middleware
app.use(bodyParser.json());
// GET /comments
app.get('/comments', (req, res) => {
    res.send(comments);
});
// POST /comments
app.post('/comments', (req, res) => {
    const comment = {
        id: nextId++,
        name: req.body.name,
        comment: req.body.comment
    };
    comments.push(comment);
    res.send(comment);
});
// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const comment = comments.find(c => c.id === id);
    if (!comment) {
        return res.status(404).send({ error: 'Comment not found' });
    }
    comment.name = req.body.name;
    comment.comment = req.body.comment;
    res.send(comment);
});
// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = comments.findIndex(c => c.id === id);
    if (index === -1) {
        return res.status(404).send({ error: 'Comment not found' });
    }
    comments.splice(index, 1);
    res.sendStatus(204);
});
// Start the server
app.listen(3000, () => {
    console.log('Server is running');
});