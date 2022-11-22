import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://root:root@mongo:27017", { useNewUrlParser: true });
const db = client.db("mongo");
client.connect().then(() => {
    console.log('app1 successfully connect to db.')
    db.collection("users").insertOne({name: "trop fort"}).then(() => {
        db.collection("users").find({}).toArray().then((rep) => {
            console.log(rep);
        })
    })
}).catch(console.log);

export default db;