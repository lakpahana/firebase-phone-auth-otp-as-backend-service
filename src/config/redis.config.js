const redis = require('redis');

const redisClient = redis.createClient({
    password: process.env.REDIS_PASS,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

console.log(process.env.REDIS_PASS);


module.exports = redisClient;
