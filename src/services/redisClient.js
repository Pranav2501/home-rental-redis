const redis = require('redis');

// Create Redis Client
const client = redis.createClient();

client.connect()
    .then(() => console.log('Connected to Redis'))
    .catch(err => console.error('Redis Connection Error:', err));

module.exports = client;
