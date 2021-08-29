

// outros
const bodyParser = require('body-parser');
const path = require('path');

// importar arquivos
const formHtml = path.join(__dirname, '../', 'form.html');
const formCss = path.join(__dirname, '../', 'form.css')

// criar modelo banco de dados
const candidateSchema = {
    "name": String,
    "role": String,
    "birthDate": Date,
    "maritalStatus": String,
    "gender": String,
    "zipCode": Number,
    "address": String,
    "houseNumber": Number,
    "houseComplement": String,
    "neighborhood": String,
    "city": String,
    "uf": String,
    "telephone1": Number,
    "telephone2": Number,
    "email": String,
    "linkedin": String,
    "github": String,
    "facebook": String,
    "twitter": String
}
const Candidate = mongoose.model("Candidate", candidateSchema);

// rotas
app.get('/', (req, res) => {
    res.sendFile(formHtml);
})

// mandar dados pro banco de dados
app.post('/', (req, res) => {
    let newCandidate = new Candidate({
        "name": req.body.title,
        "role": req.body.role,
        "birthDate": req.body.birthDate,
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
        "telephone2": req.body.telephone2,
        "email": req.body.email,
        "linkedin": req.body.linkedin,
        "github": req.body.github,
        "facebook": req.body.facebook,
        "twitter": req.body.twitter
    });
    newCandidate.save();
    res.redirect('/');
})

