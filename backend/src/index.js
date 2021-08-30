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
const collection = "candidates"
const client = mongoose.connect("mongodb+srv://lineavelino:XVGbHMF3f3XZ9OI6@jobsnet.tzmyb.mongodb.net/JobsNet?retryWrites=true&w=majority")

// outros
const path = require('path');
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const Candidate = require('./candidateSchema');

// importar arquivos
const frontend = (path.join(__dirname, '../../frontend'));
const formHtml = (path.join(__dirname, '../../frontend/index.html'));
const erroHtml = (path.join(__dirname, '../../frontend/erro.html'));

// app. use
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.use(serveStatic(frontend));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (_, res) => {
    res.sendFile(formHtml);
});

app.post('/register', async function register(req, res) {
    // mandar dados pro banco de dados
    await client;
    console.log("Connected correctly to server");

    const newCandidate = new Candidate({
        "name": req.body.name,
        "role": req.body.role,
        "birthDate": req.body.birthDate,
        "cpf": req.body.cpf,
        "maritalStatus": req.body.maritalStatus,
        "gender": req.body.gender,
        "zipCode": req.body.zipCode,
        "address": req.body.address,
        "houseNumber": req.body.houseNumber,
        "houseComplement": req.body.houseComplement,
        "neighborhood": req.body.neighborhood,
        "city": req.body.city,
        "uf": req.body.uf,
        "telephone1": req.body.telephone1,
        "email": req.body.email,
        "linkedin": req.body.linkedin,
        "github": req.body.github,
        "facebook": req.body.facebook,
        "twitter": req.body.twitter
    })
    newCandidate.save((err, _) => {
        if (err) {
            console.log(err);
            return res.status(500).sendFile(erroHtml);
        }

        return res.status(200).redirect('/');
    });
    console.log(newCandidate);
}
);


// rodar o server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})