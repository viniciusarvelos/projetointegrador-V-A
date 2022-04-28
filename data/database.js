const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://viniciusarvelos:6L9CZ4ps2F4pTQXX@cluster0.7jpzu.mongodb.net/online-shop?retryWrites=true&w=majority');
  database = client.db('online-shop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};