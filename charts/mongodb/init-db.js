const fullName = process.env.MONGODB_FULL_NAME;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

db = db.getSiblingDB('auth');

db.createCollection('users');

const result = db.users.insertOne({
    full_name: fullName,
    username: username,
    password: password
});

printjson(db.users.findOne({ _id: result.insertedId }));
