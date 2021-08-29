const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://lineavelino:XVGbHMF3f3XZ9OI6@jobsnet.tzmyb.mongodb.net/JobsNet?retryWrites=true&w=majority";
const client = new MongoClient(url);

// The database to use
const dbName = "JobsNet";

async function register(req, res) {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        // Use the collection "people"
        const col = db.collection("candidates");
        // Construct a document                                                                                                                                                              
        let newCandidate = {
            "name": "triste",
            "role": "Fullstack Developer",
            "birth-date": new Date(1993, 6, 18),
            "marital-status": "Casada(o)",
            "gender": "feminine",
            "zip-code": "23013425",
            "address": "Avenida Santa Cruz",
            "house-number": "11806",
            "house-complement": "casa 95",
            "neighborhood": "Senador Vasconcelos",
            "city": "Rio de Janeiro",
            "uf": "RJ",
            "telephone1": "(21) 96857-2264",
            "telephone2": "",
            "email": "aline.savelino@gmail.com",
            "linkedin": "linkedin.com",
            "github": "github.com",
            "facebook": "facebook.com",
            "twitter": "twitter.com"
        }
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(newCandidate);
        // Find one document
        const candidate = await col.findOne();
        // Print to the console
        console.log(candidate);
    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}
register().catch(console.dir)

module.exports = register()
