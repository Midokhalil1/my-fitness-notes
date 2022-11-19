import { MongoClient } from 'mongodb';
import { uri } from "../credentials.js";
export function dbConnect () {
    const client = new MongoClient(uri);
    return client.db("mydatabase");
}

// MongoClient- Nodejs library thats handle connecting to and interacting with MongoDB database.