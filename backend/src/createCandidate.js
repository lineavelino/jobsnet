const Candidate = require('./candidateSchema');
const body = require('body-parser')

// mandar dados pro banco de dados
module.exports = {
    async register(req, res) {
        const newCandidate = new Candidate({
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


        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro interno no servidor.');
            }

            return res.status(200).send(savedCandidate);
        });
        res.redirect('/');
    },
};
