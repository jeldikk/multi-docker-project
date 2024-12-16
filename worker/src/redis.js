const redis = require('redis');
const keys = require("./keys");
const fibonacci = require('./fibonacci');

const redisUrl = `redis://${keys.redisHost}:${keys.redisPort}`;
console.log({redisUrl, keys})
const client = redis.createClient({
    socket: {
        host: keys.redisHost,
        port: keys.redisPort
    }
});

const subscriber = client.duplicate();

client.on('message', async (channel, message) => {
    console.log({channel, message})
    await client.hSet('values', message, fibonacci(parseInt(message)))
});

subscriber.subscribe('insert')
// subscriber.subscribe('insert', async (message, ch) => {
//     console.log(`message received from channel: ${ch} is :`, message)
//     await client.hSet('values', message, fibonacci(parseInt(message)))
// })

module.exports = {
    client
}
