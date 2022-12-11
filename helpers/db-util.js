import { MongoClient } from "mongodb";

let client;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://Dennis:08128885947@cluster0.iibo7qz.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};

export const getAllDocument = async (client, collection, sort) => {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
};
