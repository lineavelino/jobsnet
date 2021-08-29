const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://lineavelino:XVGbHMF3f3XZ9OI6@jobsnet.tzmyb.mongodb.net/JobsNet?retryWrites=true&w=majority"
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);