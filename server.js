const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/login/static/index.html');
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/login/static/login.html')
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
});

const port = 3000

app.listen(port, () => console.log(`App is listening on port ${port}`));