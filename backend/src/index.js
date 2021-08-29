// setando o express
const express = require('express');
const app = express();
const port = 5000;
const routes = require('./routes');

// swagger
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

// setando o banco de dados
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://lineavelino:XVGbHMF3f3XZ9OI6@jobsnet.tzmyb.mongodb.net/JobsNet?retryWrites=true&w=majority")

// outros
const path = require('path');
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')

// importar arquivos
const frontend = (path.join(__dirname, '../../frontend'));
const formHtml = (path.join(__dirname, '../../frontend/form.html'));
const registerHtml = (path.join(__dirname, '../../frontend/register.html'));

// app. use
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.use(serveStatic(frontend));
app.use(bodyParser.json())

app.get('/', (_, res) => {
    res.sendFile(formHtml);
});
app.get('/register', (_, res) => {
    res.sendFile(registerHtml)
})

// rodar o server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})