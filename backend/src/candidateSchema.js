const mongoose = require('mongoose');

// criar modelo banco de dados
const candidateSchema = {
    "name": { type: String, unique: false, required: true },
    "role": { type: String, unique: false, required: true },
    "birthDate": { type: Date, unique: false, required: true },
    "maritalStatus": { type: String, unique: false, required: true },
    "gender": { type: String, unique: false, required: true },
    "zipCode": { type: Number, unique: false, required: true },
    "address": { type: String, unique: false, required: true },
    "houseNumber": { type: Number, unique: false, required: true },
    "houseComplement": { type: String, unique: false, required: false },
    "neighborhood": { type: String, unique: false, required: true },
    "city": { type: String, unique: false, required: true },
    "uf": { type: String, unique: false, required: true },
    "telephone1": { type: Number, unique: false, required: true },
    "telephone2": { type: Number, unique: false, required: false },
    "email": { type: String, unique: true, required: true },
    "linkedin": { type: String, unique: false, required: false },
    "github": { type: String, unique: false, required: false },
    "facebook": { type: String, unique: false, required: false },
    "twitter": { type: String, unique: false, required: false }
};
module.exports = mongoose.model("Candidate", candidateSchema);
