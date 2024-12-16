const redis = require('redis');
const keys = require('./keys');

// class RedisConfig{
//     constructor
// }

const client = redis.createClient({
    socket: {
        host: keys.redisHost,
        port: keys.redisPort
    }
});

// const publisher = client.duplicate();

module.exports = {
    client
}